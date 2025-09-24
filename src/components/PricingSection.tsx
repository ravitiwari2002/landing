import React, { useState } from 'react';
import { CheckIcon, SparklesIcon } from 'lucide-react';
const pricingPlans = [{
  name: 'Starter',
  price: '$29',
  period: '/month',
  description: 'Perfect for individuals exploring AI capabilities',
  features: ['Access to 20+ AI models', 'Basic comparison tools', '100 queries per day', 'Email support'],
  cta: 'Start Free Trial',
  highlight: false,
  color: 'from-blue-400 to-blue-600',
  hoverColor: 'from-blue-500 to-blue-700'
}, {
  name: 'Pro',
  price: '$79',
  period: '/month',
  description: 'Ideal for professionals and small teams',
  features: ['Access to 50+ AI models', 'Advanced comparison tools', 'Unlimited queries', 'Team collaboration features', 'Priority support'],
  cta: 'Get Started',
  highlight: true,
  color: 'from-primary to-blue-700',
  hoverColor: 'from-primary to-blue-800'
}, {
  name: 'Enterprise',
  price: 'Custom',
  period: '',
  description: 'For organizations with advanced AI needs',
  features: ['Access to 100+ AI models', 'Custom model integration', 'Advanced analytics', 'Dedicated account manager', 'SLA guarantees'],
  cta: 'Contact Sales',
  highlight: false,
  color: 'from-purple-400 to-purple-600',
  hoverColor: 'from-purple-500 to-purple-700'
}];
const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  return <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map(plan => <div key={plan.name} className={`rounded-2xl overflow-hidden transition-all duration-500 group relative ${hoveredPlan === plan.name ? 'scale-105 z-20' : plan.highlight ? 'scale-105 z-10' : ''}`} onMouseEnter={() => setHoveredPlan(plan.name)} onMouseLeave={() => setHoveredPlan(null)}>
              {/* Background gradient animation */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-${plan.highlight || hoveredPlan === plan.name ? '100' : '0'} transition-all duration-500`}></div>
              <div className="relative bg-white m-0.5 rounded-xl h-full flex flex-col">
                {plan.highlight && <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <SparklesIcon className="h-3 w-3 mr-1" />
                      MOST POPULAR
                    </span>
                  </div>}
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-semibold text-apple-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-apple-gray-900 group-hover:text-primary transition-colors duration-300">
                      {plan.price}
                    </span>
                    <span className="text-apple-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-apple-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map(feature => <li key={feature} className="flex items-start">
                        <CheckIcon className={`h-5 w-5 mr-2 ${plan.highlight || hoveredPlan === plan.name ? 'text-primary' : 'text-green-500'} transition-colors duration-300`} />
                        <span className="text-apple-gray-700">{feature}</span>
                      </li>)}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <button className={`w-full py-3 px-4 rounded-full text-center font-medium transition-all duration-500 ${plan.highlight || hoveredPlan === plan.name ? `bg-gradient-to-r ${plan.hoverColor} text-white shadow-lg hover:shadow-${plan.name === 'Pro' ? 'blue' : plan.name === 'Enterprise' ? 'purple' : 'blue'}-500/50` : 'bg-apple-gray-100 text-apple-gray-800 hover:bg-apple-gray-200'}`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PricingSection;