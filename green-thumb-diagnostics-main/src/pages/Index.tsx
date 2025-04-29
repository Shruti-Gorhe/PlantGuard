
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      
      <section className="py-20 bg-leaf-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Start protecting your plants today
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Join thousands of gardeners and farmers who are already using PlantGuard to keep their gardens healthy and thriving.
          </p>
          <a 
            href="/upload" 
            className="inline-block bg-white text-leaf-600 font-medium px-8 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-lg animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Try It Now — It's Free
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
