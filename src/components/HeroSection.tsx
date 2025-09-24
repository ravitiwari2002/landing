import React, { useEffect, useState, useRef } from 'react';
const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      const element = parallaxRef.current;
      element.style.transform = `translateY(${scrollY * 0.25}px)`;
    };
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMousePosition({
        x,
        y
      });
    };
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
    targets.forEach(target => observer.observe(target));
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);
  return <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent" ref={parallaxRef}></div>
        <div className="absolute -top-32 right-10 h-64 w-64 bg-gradient-to-br from-primary/15 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-16 h-56 w-56 bg-gradient-to-br from-[#9bbcff]/30 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,119,237,0.08),transparent_70%)]" style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 reveal">
            <div className="inline-flex items-center space-x-2 rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-apple-gray-500 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary"></span>
              <span>Multi-model intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-apple-gray-900">
              Effortless conversations.
              <br />
              Extraordinary intelligence.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-apple-gray-500">
              Viora orchestrates the world’s most capable AI models inside a single refined workspace. Compare, collaborate, and ship ideas with clarity and speed.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#get-started" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-apple-gray-900 px-7 py-3 text-sm font-medium tracking-wide text-white transition-all duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10">Begin free trial</span>
              </a>
              <a href="#learn-more" className="inline-flex items-center text-sm font-medium text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
                Discover the platform
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-2 h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative reveal">
            <div className="absolute inset-0 -translate-x-10 rounded-[32px] bg-gradient-to-br from-white/60 via-white/30 to-white/10 blur-3xl"></div>
            <div className="relative rounded-[32px] border border-white/40 bg-white/80 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute inset-x-8 -top-10 mx-auto h-20 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-transparent blur-2xl"></div>
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-apple-gray-400">Active models</p>
                    <p className="mt-2 text-2xl font-semibold text-apple-gray-900">Conversation sync</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-full bg-apple-gray-100/60 px-3 py-2 text-xs font-medium text-apple-gray-500">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Live
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  {[
                    ['GPT-4o', 'OpenAI', 86],
                    ['Claude 3', 'Anthropic', 74],
                    ['Gemini Pro', 'Google', 92]
                  ].map(model => <div key={model[0]} className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.2em] text-apple-gray-400">{model[1]}</p>
                      <p className="mt-2 text-base font-semibold text-apple-gray-900">{model[0]}</p>
                      <div className="mt-4 h-1.5 w-full rounded-full bg-apple-gray-100">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary to-blue-500" style={{ width: `${model[2]}%` }}></div>
                      </div>
                    </div>)}
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-apple-gray-400">Unified prompt</p>
                  <p className="mt-3 text-lg text-apple-gray-700">
                    “Summarize customer feedback from last quarter and highlight action items for the product design team.”
                  </p>
                  <div className="mt-6 grid gap-3 text-sm md:grid-cols-3">
                    {['Speed comparison', 'Tone match', 'Export to docs'].map(feature => <div key={feature} className="rounded-full bg-apple-gray-100/70 px-4 py-2 text-center text-apple-gray-600">
                        {feature}
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;