import React, { useEffect, useState, useRef } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
const faqs = [{
  question: 'What is Viora AI?',
  answer: 'Viora AI is a multi-model intelligence platform that gives you access to 100+ AI models including ChatGPT, Claude, Gemini, and Llama. It allows you to compare responses from different models side by side with a single prompt.'
}, {
  question: 'How does the AI model comparison work?',
  answer: 'Our platform sends your prompt to multiple AI models simultaneously and displays their responses side by side. This allows you to compare how different models interpret and respond to the same prompt, highlighting their unique strengths and approaches.'
}, {
  question: 'Do I need technical expertise to use Viora AI?',
  answer: 'Not at all! Viora AI is designed with an intuitive interface that makes it easy for anyone to use, regardless of technical background. Simply enter your prompt, select the models you want to compare, and see the results.'
}, {
  question: 'Can I use Viora AI for commercial purposes?',
  answer: 'Yes, our Pro and Enterprise plans support commercial use. The usage rights for specific model outputs may vary based on the models you use, but our platform is designed for professional and business applications.'
}, {
  question: 'How secure is my data on Viora AI?',
  answer: 'We take data security very seriously. Your prompts and results are encrypted in transit and at rest. We do not use your data to train models, and we offer enterprise-grade security features for businesses with strict compliance requirements.'
}];
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
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
        faqRefs.current.forEach((faq, index) => {
          if (faq) {
            const delay = index * 0.1;
            const translateX = Math.max(0, 50 * (0.5 - Math.min(1, Math.max(0, scrollProgress - delay))));
            faq.style.transform = `translateX(${translateX}px)`;
            faq.style.opacity = Math.min(1, Math.max(0, scrollProgress * 2 - delay));
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
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="py-24 bg-apple-gray-50 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-apple-gray-600">
            Everything you need to know about Viora AI
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} ref={el => faqRefs.current[index] = el} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md" style={{
          opacity: 0,
          transform: 'translateX(50px)'
        }}>
              <button className="w-full flex justify-between items-center p-6 text-left" onClick={() => toggleFAQ(index)}>
                <h3 className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-apple-gray-800'}`}>
                  {faq.question}
                </h3>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-primary transition-colors duration-300" /> : <ChevronDownIcon className="h-5 w-5 text-apple-gray-500 transition-colors duration-300" />}
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <div className={`px-6 text-apple-gray-600 transition-all duration-500 ${openIndex === index ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4"></div>
                  {faq.answer}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FAQSection;