
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Upload', href: '/upload' },
    { name: 'History', href: '/history' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'glass shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-leaf-600" />
          <span className="font-display text-xl font-medium text-foreground">PlantGuard</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" className="rounded-lg">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button className="rounded-lg bg-leaf-500 hover:bg-leaf-600 text-white">Sign up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 animate-fade-in-down">
          <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-leaf-600 bg-leaf-50'
                    : 'text-foreground hover:text-leaf-600 hover:bg-leaf-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t border-sage-200 mt-2">
              <Link to="/login">
                <Button variant="outline" className="w-full justify-center">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full justify-center bg-leaf-500 hover:bg-leaf-600 text-white">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
