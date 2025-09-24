import React from 'react';
import { ZapIcon, LayersIcon, UsersIcon, GlobeIcon } from 'lucide-react';
const features = [
  {
    title: 'Unified orchestration',
    description: 'Direct prompts to 100+ leading AI models with a single command and instantly see their unique strengths.',
    icon: LayersIcon
  },
  {
    title: 'Precision comparison',
    description: 'Timeline views, tone checks, and side-by-side outputs help your team choose the best response faster.',
    icon: ZapIcon
  },
  {
    title: 'Team-native workspace',
    description: 'Share threads, leave inline notes, and co-create prompts in a polished environment built for collaboration.',
    icon: UsersIcon
  },
  {
    title: 'Continuous insight',
    description: 'Tap into curated prompt libraries and usage analytics that stay in sync with your organisation’s goals.',
    icon: GlobeIcon
  }
];
const FeaturesSection = () => {
  return <section id="features" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-apple-gray-200 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 reveal">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-900">
            Built for people who expect more from AI
          </h2>
          <p className="max-w-3xl text-lg text-apple-gray-500">
            Viora condenses complex multi-model workflows into a calm, beautifully minimal interface. Everything feels effortless so your teams can focus on decisions, not dashboards.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map(feature => <div key={feature.title} className="reveal rounded-[28px] border border-white/60 bg-white/80 p-10 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-45px_rgba(0,0,0,0.5)]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-900/90 text-white shadow-[0_10px_25px_-15px_rgba(0,0,0,0.6)]">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-apple-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-apple-gray-500">
                {feature.description}
              </p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;