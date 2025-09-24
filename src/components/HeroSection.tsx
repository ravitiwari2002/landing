import React, { useEffect, useState, useRef } from 'react';
const HeroSection = () => {
  const parallaxRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      const element = parallaxRef.current as HTMLElement;
      element.style.transform = `translateY(${scrollY * 0.4}px)`;
    };
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({
        x,
        y
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section className="relative h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-purple-50 to-white opacity-70" ref={parallaxRef}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,119,237,0.15),transparent_70%)]" style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.1),transparent_60%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-black via-primary to-purple-700 bg-clip-text text-transparent mb-6 opacity-0 animate-[fadeIn_0.8s_0.2s_forwards]">
            One Prompt
            <br />
            Infinite Perspectives
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-apple-gray-600 opacity-0 animate-[fadeIn_0.8s_0.4s_forwards]">
            Viora AI is the multi-model intelligence platform. Access 100+ AI
            models including ChatGPT, Claude, Gemini, and Llama.
          </p>
          <div className="mt-10 opacity-0 animate-[fadeIn_0.8s_0.6s_forwards]">
            <a href="#get-started" className="inline-block rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg hover:shadow-blue-200/50 transition-all hover:scale-105 mr-4">
              Get Started
            </a>
            <a href="#learn-more" className="inline-block rounded-full bg-white px-6 py-3 text-lg font-medium text-primary border border-primary shadow-sm hover:bg-blue-50 transition-all hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-16 max-w-5xl mx-auto opacity-0 animate-[fadeIn_1s_0.8s_forwards] relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl blur-md opacity-70"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-white to-blue-50 p-1">
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1671723059748-0a3ff441941e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="AI Interface Visualization" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;