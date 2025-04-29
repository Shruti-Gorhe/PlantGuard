
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="py-8 bg-sage-50 border-t border-sage-200">
        <div className="container text-center">
          <p className="text-sage-600">© {new Date().getFullYear()} Plant Disease Detection System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
