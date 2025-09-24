import React, { useEffect, useRef } from 'react';
import { ZapIcon, LayersIcon, UsersIcon, GlobeIcon } from 'lucide-react';
const features = [{
  title: 'Multi-Model Access',
  description: 'Compare and use 100+ AI models side by side, from industry leaders to open-source innovations.',
  icon: LayersIcon,
  color: 'from-blue-400 to-blue-600',
  hoverColor: 'from-blue-500 to-blue-700',
  bgLight: 'bg-blue-50'
}, {
  title: 'Real-time Comparison',
  description: 'See how different AI models respond to the same prompt instantly, highlighting unique strengths.',
  icon: ZapIcon,
  color: 'from-purple-400 to-purple-600',
  hoverColor: 'from-purple-500 to-purple-700',
  bgLight: 'bg-purple-50'
}, {
  title: 'Collaborative Workspace',
  description: 'Share prompts and results with your team, maintaining a centralized AI testing environment.',
  icon: UsersIcon,
  color: 'from-green-400 to-green-600',
  hoverColor: 'from-green-500 to-green-700',
  bgLight: 'bg-green-50'
}, {
  title: 'Global Knowledge Base',
  description: 'Access our extensive library of optimized prompts for various use cases and industries.',
  icon: GlobeIcon,
  color: 'from-orange-400 to-orange-600',
  hoverColor: 'from-orange-500 to-orange-700',
  bgLight: 'bg-orange-50'
}];
const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      // Calculate how far through the section we've scrolled
      const scrollProgress = (scrollY - (sectionTop - windowHeight)) / (sectionHeight + windowHeight);
      if (scrollProgress > 0 && scrollProgress < 1) {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const delay = index * 0.1;
            const translateY = Math.max(0, 50 * (0.5 - Math.min(1, Math.max(0, scrollProgress - delay))));
            card.style.transform = `translateY(${translateY}px)`;
            card.style.opacity = Math.min(1, Math.max(0, scrollProgress * 2 - delay));
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <section id="features" className="py-24 bg-apple-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Advanced Features
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Discover the power of multi-model AI comparison with our innovative
            platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={feature.title} ref={el => cardsRef.current[index] = el} className={`${feature.bgLight} rounded-2xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl group`} style={{
          opacity: 0,
          transform: 'translateY(50px)'
        }}>
              <div className={`rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-r ${feature.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-gradient-to-r group-hover:${feature.hoverColor}`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-apple-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-apple-gray-600">{feature.description}</p>
              <div className="h-1 w-0 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 transition-all duration-500 group-hover:w-full"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;