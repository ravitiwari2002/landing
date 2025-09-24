import React, { useState } from 'react';
const models = [
  {
    name: 'GPT-4o',
    company: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
    description: 'Conversational reasoning with nuanced control.'
  },
  {
    name: 'Claude 3 Opus',
    company: 'Anthropic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png',
    description: 'Contextual understanding across complex briefs.'
  },
  {
    name: 'Gemini Pro',
    company: 'Google',
    logo: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_1.max-1300x1300.png',
    description: 'Multimodal insight optimised for research.'
  },
  {
    name: 'Llama 3',
    company: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Meta_Llama_logo.png/800px-Meta_Llama_logo.png',
    description: 'Flexible open-source intelligence for builders.'
  },
  {
    name: 'Mistral Large',
    company: 'Mistral AI',
    logo: 'https://avatars.githubusercontent.com/u/132349341',
    description: 'European craftsmanship with efficient scaling.'
  }
];
const allModels = [...models, ...models];
const ModelsCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return <section id="models" className="py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-900">A line-up of the world’s best models</h2>
          <p className="mx-auto max-w-2xl text-lg text-apple-gray-500">
            Curate bespoke model stacks, swap providers with a tap, and maintain compliance without breaking your flow.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f5f5f7] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f5f5f7] to-transparent"></div>
          <div className="flex overflow-hidden py-10">
            <div className="flex animate-infinite-scroll hover:pause-animation gap-8">
              {allModels.map((model, index) => <article key={`${model.name}-${index}`} className="group relative flex h-56 w-60 flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/40 bg-white/80 px-6 py-6 text-left backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-60px_rgba(0,0,0,0.65)]" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 shadow-[0_10px_25px_-20px_rgba(0,0,0,0.6)]">
                      <img src={model.logo} alt={`${model.name} logo`} className="max-h-8 max-w-8 object-contain" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-apple-gray-400">{model.company}</p>
                      <p className="text-base font-medium text-apple-gray-900">{model.name}</p>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed text-apple-gray-500 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-apple-gray-400">
                    <span>Latency</span>
                    <span className="flex-1 mx-2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></span>
                    <span>{hoveredIndex === index ? 'optimised' : 'balanced'}</span>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary/60 to-transparent"></span>
                </article>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ModelsCarousel;