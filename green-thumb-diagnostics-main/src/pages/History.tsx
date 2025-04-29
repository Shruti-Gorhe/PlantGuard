
import Layout from '@/components/Layout';
import HistoryList from '@/components/history/HistoryList';

const History = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Diagnosis History</h1>
          <p className="text-lg text-muted-foreground">
            Review your past plant disease diagnoses and track treatment progress over time.
          </p>
        </div>
        
        <HistoryList />
      </div>
    </Layout>
  );
};

export default History;
