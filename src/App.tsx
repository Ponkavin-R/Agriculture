import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import ServiceableLocations from './pages/ServiceableLocations';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsCondition';
import RefundPolicy from './pages/RefundPolicy';
import CropzapGrower from './pages/CropzapGrower';
import Cropzapmart from './pages/Cropzapmart';
import Blog from './pages/Blog';
import ESG from './pages/Esg';
import RegistrationForm from './pages/RegistrationForm';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/esg" element={<ESG />} />
            <Route path="/locations" element={<ServiceableLocations />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path='/refund' element={<RefundPolicy />} />
            <Route path='/solution/form1' element={<CropzapGrower/>}/>
            <Route path='/solution/form2' element={<Cropzapmart/>}/>
            <Route path='/registrationform' element={<RegistrationForm/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}