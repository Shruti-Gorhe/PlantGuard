
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }
    
    setLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Account created successfully');
      console.log('Signup data:', { name, email, password });
      // In a real app, you would handle account creation here
    }, 1500);
  };

  return (
    <div className="w-full max-w-md space-y-6 animate-fade-in-up">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Create an account</h2>
        <p className="text-muted-foreground mt-2">
          Sign up to start detecting plant diseases
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            Password must be at least 8 characters long
          </p>
        </div>
        
        <div className="flex items-start space-x-2 py-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
          />
          <Label htmlFor="terms" className="text-sm leading-tight cursor-pointer">
            I agree to the{' '}
            <Link to="/terms" className="text-leaf-600 hover:text-leaf-700 transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-leaf-600 hover:text-leaf-700 transition-colors">
              Privacy Policy
            </Link>
          </Label>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-leaf-500 hover:bg-leaf-600 text-white py-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            'Create account'
          )}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="text-leaf-600 hover:text-leaf-700 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
