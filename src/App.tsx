import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="grain" style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Products />
      <WhyUs />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
