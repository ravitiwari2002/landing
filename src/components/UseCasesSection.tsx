import React, { useEffect, useRef } from 'react';
const useCases = [{
  title: 'Content Creation',
  description: 'Compare how different models generate creative content, from articles to marketing copy.',
  image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  color: 'from-pink-400 to-red-500'
}, {
  title: 'Research & Analysis',
  description: 'See how models approach complex research questions and analytical problems.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  color: 'from-blue-400 to-indigo-500'
}, {
  title: 'Code Generation',
  description: 'Compare code solutions from multiple AI models to find the most efficient implementation.',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  color: 'from-green-400 to-teal-500'
}];
const UseCasesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        elementsRef.current.forEach((el, index) => {
          if (el) {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, index * 200);
          }
        });
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      imagesRef.current.forEach(el => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const img = el.querySelector('img');
          if (img) {
            // Calculate distance from center of element
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2);
            const strength = Math.min(distance / maxDistance * 10, 10);
            img.style.transform = `scale(1.1) translate(${x / strength}px, ${y / strength}px)`;
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="use-cases" className="py-24 bg-apple-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Explore how Viora AI transforms workflows across industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => <div key={useCase.title} ref={el => elementsRef.current[index] = el} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 group hover:shadow-xl" style={{
          opacity: 0,
          transform: 'translateY(40px)'
        }}>
              <div className="h-48 overflow-hidden relative" ref={el => imagesRef.current[index] = el}>
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <span className="text-white font-medium p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Explore {useCase.title}
                  </span>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-apple-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-apple-gray-600">{useCase.description}</p>
              </div>
              <div className={`h-1 w-0 bg-gradient-to-r ${useCase.color} transition-all duration-500 group-hover:w-full`}></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default UseCasesSection;