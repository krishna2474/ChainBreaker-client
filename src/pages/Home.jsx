import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Integration from '../components/Integration';
import Pricing from '../components/Pricing';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Metrics from '../components/Metrics';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Metrics />
      <Features />
      <Integration />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
