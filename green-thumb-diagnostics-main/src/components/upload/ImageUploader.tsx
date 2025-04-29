
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, ImageIcon, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
}

const ImageUploader = ({ onImageUploaded }: ImageUploaderProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }
    
    // Create a preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    
    // Simulate upload process
    simulateUpload(file);
    
    return () => URL.revokeObjectURL(objectUrl);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    multiple: false
  });

  const simulateUpload = (file: File) => {
    setLoading(true);
    setUploadProgress(0);
    
    const totalSteps = 10;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep += 1;
      setUploadProgress(Math.round((currentStep / totalSteps) * 100));
      
      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setLoading(false);
        onImageUploaded(URL.createObjectURL(file));
        toast.success('Image uploaded successfully');
      }
    }, 300);
  };

  const clearImage = () => {
    setPreview(null);
    setUploadProgress(0);
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in-up">
      {!preview ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-12 transition-colors duration-200 text-center cursor-pointer ${
            isDragActive
              ? 'border-leaf-500 bg-leaf-50'
              : 'border-border hover:border-leaf-300 hover:bg-leaf-50/50'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="p-4 bg-leaf-100 rounded-full">
              <Upload className="h-8 w-8 text-leaf-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Drag and drop your image here</h3>
              <p className="text-sm text-muted-foreground">
                or click to browse your files
              </p>
              <p className="text-xs text-muted-foreground">
                Supports: JPG, PNG, WEBP (max 10MB)
              </p>
            </div>
            <Button className="bg-leaf-500 hover:bg-leaf-600 text-white">
              Select Image
            </Button>
          </div>
        </div>
      ) : (
        <div className="border rounded-xl p-6 bg-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium">Selected Image</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearImage}
              disabled={loading}
              className="text-muted-foreground hover:text-destructive"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative rounded-lg overflow-hidden border bg-muted">
            {preview && (
              <img
                src={preview}
                alt="Image preview"
                className="w-full object-contain max-h-[400px]"
              />
            )}
            
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-4">
                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                <p className="mb-2 text-center">Uploading...</p>
                <div className="w-full max-w-xs">
                  <Progress value={uploadProgress} className="h-2 w-full" />
                  <p className="text-xs text-center mt-1">{uploadProgress}%</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <Button
              className="w-full bg-leaf-500 hover:bg-leaf-600 text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                'Detect Diseases'
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
