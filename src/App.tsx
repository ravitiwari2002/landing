import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ModelsCarousel from './components/ModelsCarousel';
import UseCasesSection from './components/UseCasesSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
export function App() {
  return <div className="font-sans text-gray-900 bg-white">
      <ScrollProgressIndicator />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ModelsCarousel />
        <UseCasesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>;
}