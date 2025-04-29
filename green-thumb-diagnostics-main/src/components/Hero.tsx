
import { ArrowRight, Leaf, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const features = [
    'Instant disease detection',
    'Treatment recommendations',
    'Historical data tracking',
    'Expert-verified results'
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-leaf-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent text-accent-foreground">
              <Leaf className="mr-1 h-3 w-3" />
              <span>AI-Powered Plant Health Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Keep your plants healthy with smart detection
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Upload a photo of your plant leaf and our AI will identify diseases, 
              provide treatment options, and help you maintain a thriving garden.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-sage-700 bg-sage-50 px-3 py-1 rounded-full">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/upload">
                <Button size="lg" className="w-full sm:w-auto bg-leaf-500 hover:bg-leaf-600 text-white">
                  Start Detecting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative animate-fade-in-right">
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Plant health inspection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-green-100">
                  <CheckCircle className="h-5 w-5 text-leaf-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tomato Late Blight</p>
                  <p className="text-xs text-muted-foreground">Detected in 0.8 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
