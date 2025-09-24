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
  return <div className="font-sans text-apple-gray-900 bg-gradient-to-b from-white via-[#f5f5f7] to-white min-h-screen selection:bg-primary/10 selection:text-primary">
      <ScrollProgressIndicator />
      <Navbar />
      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,119,237,0.08),_transparent_55%)]"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,119,237,0.05),_transparent_60%)]"></div>
        <div className="relative">
          <HeroSection />
          <FeaturesSection />
          <ModelsCarousel />
          <UseCasesSection />
          <PricingSection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>;
}