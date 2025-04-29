
import { useParams, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import DiagnosisResult from '@/components/results/DiagnosisResult';
import { useState, useEffect } from 'react';
import { getDisease } from '@/utils/diseaseDetection';
import { toast } from 'sonner';

const Results = () => {
  const { id } = useParams();
  const location = useLocation();
  const [resultData, setResultData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get uploaded image from location state if available
    const uploadedImage = location.state?.imageUrl;
    
    // In a real app, you would make an API call to your backend with the image
    const fetchResults = async () => {
      try {
        setLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Get a disease based on the id (or random if not provided)
        // In a real app, this would be the result from your ML model
        const detectedDisease = getDisease(id);
        
        // If we have an uploaded image, use that instead of the stock image
        if (uploadedImage) {
          detectedDisease.imageUrl = uploadedImage;
        }
        
        setResultData(detectedDisease);
        toast.success(`Disease identified: ${detectedDisease.diseaseName}`);
      } catch (error) {
        console.error('Error fetching results:', error);
        toast.error('Error analyzing image. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [id, location.state]);

  if (loading) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Analyzing your plant...</h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-leaf-500"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Diagnosis Results</h1>
          <p className="text-lg text-muted-foreground">
            Our AI has analyzed your image and provided the following diagnosis and recommendations.
          </p>
        </div>
        
        {resultData && <DiagnosisResult {...resultData} />}
      </div>
    </Layout>
  );
};

export default Results;
