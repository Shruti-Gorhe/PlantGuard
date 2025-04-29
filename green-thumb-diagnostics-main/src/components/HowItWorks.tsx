
import { Camera, Search, FileText, Check } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-white" />,
      title: 'Upload Photo',
      description: 'Take a clear photo of the affected plant leaf and upload it to our system.',
      bgColor: 'bg-leaf-500'
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: 'AI Analysis',
      description: 'Our advanced AI model analyzes the image to identify diseases and conditions.',
      bgColor: 'bg-leaf-600'
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: 'Get Results',
      description: 'Receive detailed information about detected diseases and severity levels.',
      bgColor: 'bg-leaf-700'
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: 'Apply Treatment',
      description: 'Follow recommended treatments and prevention measures for your plants.',
      bgColor: 'bg-leaf-800'
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How PlantGuard Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple four-step process helps you quickly identify and treat plant diseases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`${step.bgColor} h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                {step.icon}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute transform translate-x-full">
                  <svg className="h-4 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 8">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M0 4h22m0 0l-4-4m4 4l-4 4"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
