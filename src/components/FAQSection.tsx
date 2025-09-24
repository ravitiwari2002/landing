import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
const faqs = [
  {
    question: 'What is Viora AI?',
    answer: 'Viora AI unifies 100+ leading AI models behind one elegant interface so teams can work faster, compare responses, and share insight without friction.'
  },
  {
    question: 'How does the comparison view work?',
    answer: 'Enter a single prompt and Viora dispatches it to your selected models simultaneously. Responses appear in a side-by-side layout with tone, latency, and export controls.'
  },
  {
    question: 'Is it suitable for non-technical teams?',
    answer: 'Yes. The interface feels instantly familiar with Apple-inspired navigation, drag-and-drop prompts, and templates so every department can collaborate comfortably.'
  },
  {
    question: 'What about security and compliance?',
    answer: 'We provide region-aware routing, encryption at rest and in transit, granular access controls, and compliance packages tailored for regulated industries.'
  },
  {
    question: 'Can we integrate existing tools?',
    answer: 'Absolutely. Viora connects to knowledge bases, ticketing systems, and design tools so context flows directly into your conversations.'
  }
];
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };
  return <section id="faq" className="relative py-28">
      <div className="absolute inset-x-0 top-10 -z-10 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(0,119,237,0.08),_transparent_70%)]"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-900">Questions, answered beautifully</h2>
          <p className="text-lg text-apple-gray-500">If you have more, our team is ready to help.</p>
        </div>
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => <article key={faq.question} className="reveal overflow-hidden rounded-3xl border border-white/60 bg-white/85 backdrop-blur shadow-[0_25px_80px_-60px_rgba(0,0,0,0.65)]">
              <button className="flex w-full items-center justify-between px-6 py-6 text-left" onClick={() => toggleFAQ(index)}>
                <span className={`text-base font-medium tracking-wide ${openIndex === index ? 'text-primary' : 'text-apple-gray-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-primary" /> : <ChevronDownIcon className="h-5 w-5 text-apple-gray-400" />}
              </button>
              <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden px-6 pb-6 text-sm leading-relaxed text-apple-gray-500">
                  <div className="shimmer-line mb-4 h-px bg-apple-gray-100"></div>
                  {faq.answer}
                </div>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
};
export default FAQSection;