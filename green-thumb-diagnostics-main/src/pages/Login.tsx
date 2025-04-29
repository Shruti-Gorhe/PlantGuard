
import Layout from '@/components/Layout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
