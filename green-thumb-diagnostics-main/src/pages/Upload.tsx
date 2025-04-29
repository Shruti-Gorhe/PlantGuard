
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ImageUploader from '@/components/upload/ImageUploader';

const Upload = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageUploaded = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    // In a real app, you would send the image to your backend for processing
    // Then navigate to results with the real ID
    setTimeout(() => {
      // Generate a random ID to simulate different disease detections
      const demoIds = [
        'tomato', 'apple', 'grape', 'strawberry', 
        'corn', 'potato', 'cucumber', 'citrus',
        'peach', 'rose', 'cherry', 'pear',
        'blueberry', 'squash', 'cabbage', 'bean',
        'lettuce'
      ];
      const randomId = demoIds[Math.floor(Math.random() * demoIds.length)];
      
      navigate(`/results/${randomId}`, { 
        state: { imageUrl } 
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload a Plant Image</h1>
          <p className="text-lg text-muted-foreground">
            Upload a clear image of the affected plant leaf to get an instant disease diagnosis and treatment recommendations.
          </p>
        </div>
        
        <ImageUploader onImageUploaded={handleImageUploaded} />
        
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-medium mb-3">Tips for best results:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-leaf-600 font-bold">•</span>
                <span>Take a clear, well-lit photo of the affected leaf or plant part</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-600 font-bold">•</span>
                <span>Include both healthy and diseased parts of the plant for comparison</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-600 font-bold">•</span>
                <span>Avoid shadows or glare on the leaf surface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-600 font-bold">•</span>
                <span>Use a neutral background if possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-600 font-bold">•</span>
                <span>Take multiple photos from different angles for more accurate diagnosis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;
