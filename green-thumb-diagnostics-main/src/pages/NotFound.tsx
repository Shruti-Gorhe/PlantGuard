
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-8xl font-bold text-leaf-600 mb-4">404</h1>
          <p className="text-2xl font-medium mb-8">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-leaf-500 hover:bg-leaf-600 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
