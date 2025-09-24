import React, { useState } from 'react';
import { CheckIcon, SparklesIcon } from 'lucide-react';
const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/seat',
    description: 'Designed for individuals and small teams discovering multi-model workflows.',
    features: ['20 model connectors', 'Shared prompt library', '100 threaded conversations', 'Email support'],
    badge: null
  },
  {
    name: 'Studio',
    price: '$79',
    period: '/seat',
    description: 'For product squads that need structured collaboration and advanced controls.',
    features: ['All Starter features', 'Unlimited workspaces', 'Tone & compliance guardrails', 'Priority chat support'],
    badge: 'Recommended'
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    period: '',
    description: 'Tailored governance, deployment, and integration for global organisations.',
    features: ['Private cloud options', 'Dedicated success partner', 'Custom security reviews', 'Usage analytics exports'],
    badge: null
  }
];
const PricingSection = () => {
  const [activePlan, setActivePlan] = useState<string>('Studio');
  return <section id="pricing" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/70 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-900">Transparent pricing, tailored to scale</h2>
          <p className="mx-auto max-w-2xl text-lg text-apple-gray-500">
            Every plan includes secure multi-model routing, unified billing, and an interface that feels right at home on any Apple device.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map(plan => <article key={plan.name} onMouseEnter={() => setActivePlan(plan.name)} className={`reveal group relative flex h-full flex-col justify-between rounded-[30px] border border-white/60 bg-white/85 p-10 text-left shadow-[0_35px_100px_-70px_rgba(0,0,0,0.7)] transition-transform duration-500 ${activePlan === plan.name ? 'scale-[1.02]' : 'hover:-translate-y-1'}`}>
              {plan.badge && <div className="absolute -top-3 right-8 inline-flex items-center rounded-full bg-apple-gray-900 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
                  <SparklesIcon className="mr-2 h-3 w-3" />
                  {plan.badge}
                </div>}
              <div>
                <h3 className="text-2xl font-semibold text-apple-gray-900">{plan.name}</h3>
                <div className="mt-6 flex items-baseline space-x-2 text-apple-gray-900">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span className="text-sm text-apple-gray-400">{plan.period}</span>
                </div>
                <p className="mt-6 text-base text-apple-gray-500">{plan.description}</p>
              </div>
              <ul className="mt-10 space-y-4 text-sm text-apple-gray-600">
                {plan.features.map(feature => <li key={feature} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${activePlan === plan.name ? 'bg-primary text-white' : 'bg-apple-gray-200 text-apple-gray-500'} transition-colors`}>
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>)}
              </ul>
              <button className={`mt-12 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-500 ${activePlan === plan.name ? 'bg-apple-gray-900 text-white hover:bg-apple-gray-800' : 'bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200'}`}>
                {plan.name === 'Enterprise' ? 'Schedule a call' : 'Start your trial'}
              </button>
            </article>)}
        </div>
      </div>
    </section>;
};
export default PricingSection;