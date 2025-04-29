
import Layout from '@/components/Layout';
import SignupForm from '@/components/auth/SignupForm';

const Signup = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
