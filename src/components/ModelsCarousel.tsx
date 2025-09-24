import React, { useState } from 'react';
const models = [{
  name: 'ChatGPT-4',
  company: 'OpenAI',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
  color: 'from-green-400 to-teal-500',
  description: 'Advanced reasoning, coding, and creative capabilities'
}, {
  name: 'Claude 3',
  company: 'Anthropic',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png',
  color: 'from-blue-400 to-indigo-500',
  description: 'Excellent at nuanced instructions and detailed analysis'
}, {
  name: 'Gemini Pro',
  company: 'Google',
  logo: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_1.max-1300x1300.png',
  color: 'from-blue-400 to-purple-500',
  description: 'Multimodal understanding with strong reasoning'
}, {
  name: 'Llama 3',
  company: 'Meta',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Meta_Llama_logo.png/800px-Meta_Llama_logo.png',
  color: 'from-orange-400 to-red-500',
  description: 'Open-source model with strong general capabilities'
}, {
  name: 'Mistral Large',
  company: 'Mistral AI',
  logo: 'https://avatars.githubusercontent.com/u/132349341',
  color: 'from-sky-400 to-blue-500',
  description: 'Efficient performance with strong reasoning abilities'
}, {
  name: 'GPT-4o',
  company: 'OpenAI',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
  color: 'from-green-400 to-teal-500',
  description: 'Optimized for fast, human-like conversation'
}, {
  name: 'Claude Opus',
  company: 'Anthropic',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png',
  color: 'from-blue-400 to-indigo-500',
  description: 'Highest capability model with exceptional reasoning'
}, {
  name: 'PaLM 2',
  company: 'Google',
  logo: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_1.max-1300x1300.png',
  color: 'from-blue-400 to-purple-500',
  description: 'Strong multilingual capabilities and reasoning'
}];
// Duplicate the models for seamless looping
const allModels = [...models, ...models];
const ModelsCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return <section id="models" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            100+ AI Models
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Access the most advanced AI models from leading companies and
            open-source communities
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent"></div>
          <div className="flex overflow-hidden py-8">
            <div className="flex animate-infinite-scroll hover:pause-animation">
              {allModels.map((model, index) => <div key={`${model.name}-${index}`} className="flex-shrink-0 w-64 h-64 mx-4 rounded-xl p-1 relative transition-all duration-500 transform hover:-translate-y-2" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${model.color} rounded-xl opacity-${hoveredIndex === index ? '100' : '20'} transition-opacity duration-300`}></div>
                  <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center relative z-10">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img src={model.logo} alt={`${model.name} logo`} className="max-w-full max-h-full" />
                    </div>
                    <h3 className="text-lg font-semibold text-apple-gray-800">
                      {model.name}
                    </h3>
                    <p className="text-apple-gray-600 mb-2">{model.company}</p>
                    <div className={`mt-auto overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-apple-gray-600 text-center">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ModelsCarousel;