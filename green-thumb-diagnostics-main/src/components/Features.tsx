
import { Sprout, Database, BarChart, Clock, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sprout className="h-8 w-8 text-leaf-500" />,
      title: 'Smart Disease Detection',
      description: 'Our AI instantly identifies plant diseases from images with high accuracy.'
    },
    {
      icon: <Shield className="h-8 w-8 text-leaf-500" />,
      title: 'Treatment Recommendations',
      description: 'Get expert-verified treatment options and prevention tips for identified diseases.'
    },
    {
      icon: <Database className="h-8 w-8 text-leaf-500" />,
      title: 'History Tracking',
      description: 'Keep a record of all your plant health checks and track treatment progress.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-leaf-500" />,
      title: 'Detailed Analysis',
      description: 'View comprehensive reports about detected diseases and severity levels.'
    },
    {
      icon: <Clock className="h-8 w-8 text-leaf-500" />,
      title: 'Real-time Processing',
      description: 'Get results within seconds, not minutes, helping you take immediate action.'
    },
    {
      icon: <Zap className="h-8 w-8 text-leaf-500" />,
      title: 'Offline Capability',
      description: 'Our system works even with intermittent internet connectivity for field use.'
    }
  ];

  return (
    <section className="py-20 bg-sage-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Features for Plant Health
          </h2>
          <p className="text-lg text-muted-foreground">
            Our plant disease detection system combines cutting-edge AI with agricultural expertise
            to provide a comprehensive solution for monitoring and maintaining plant health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col items-start animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-lg bg-leaf-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
