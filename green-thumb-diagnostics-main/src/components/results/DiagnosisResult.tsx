
import { AlertTriangle, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';

interface TreatmentStep {
  title: string;
  description: string;
}

interface DiagnosisResultProps {
  imageUrl: string;
  diseaseName: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  description: string;
  treatments: TreatmentStep[];
  prevention: string[];
}

const DiagnosisResult = ({
  imageUrl,
  diseaseName,
  confidence,
  severity,
  description,
  treatments,
  prevention
}: DiagnosisResultProps) => {
  const location = useLocation();
  // Use the uploaded image if available from location state
  const displayImage = location.state?.imageUrl || imageUrl;
  
  const getSeverityColor = () => {
    switch (severity) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-green-500';
    }
  };

  const getSeverityIcon = () => {
    switch (severity) {
      case 'low': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'medium': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'high': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };
  
  const handleSaveToHistory = () => {
    // In a real app, this would save to a database
    toast.success('Result saved to history');
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card overflow-hidden">
          <img
            src={displayImage}
            alt={diseaseName}
            className="w-full h-80 object-cover object-center"
          />
        </div>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-2xl">{diseaseName}</CardTitle>
              <Badge variant="outline" className="text-xs">AI Diagnosis</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Confidence</span>
                <span className="font-medium">{confidence}%</span>
              </div>
              <Progress value={confidence} className="h-2" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm">Severity:</span>
              <div className="flex items-center gap-1.5">
                {getSeverityIcon()}
                <span className="capitalize font-medium">{severity}</span>
              </div>
              <div className="ml-auto flex gap-1">
                <span className={`h-2 w-2 rounded-full ${severity === 'low' || severity === 'medium' || severity === 'high' ? getSeverityColor() : 'bg-gray-200'}`}></span>
                <span className={`h-2 w-2 rounded-full ${severity === 'medium' || severity === 'high' ? getSeverityColor() : 'bg-gray-200'}`}></span>
                <span className={`h-2 w-2 rounded-full ${severity === 'high' ? getSeverityColor() : 'bg-gray-200'}`}></span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm">{description}</p>
            
            <Button 
              className="w-full bg-leaf-500 hover:bg-leaf-600 text-white"
              onClick={handleSaveToHistory}
            >
              Save to History
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Treatment Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {treatments.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-leaf-100 text-leaf-600 font-medium">
                    {i + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Prevention Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {prevention.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-leaf-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiagnosisResult;
