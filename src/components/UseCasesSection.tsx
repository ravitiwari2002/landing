import React from 'react';
const useCases = [
  {
    title: 'Narrative design',
    description: 'Coordinate messaging, campaign scripts, and video treatments with models that adapt to brand tone instantly.',
    stat: '4x faster approvals'
  },
  {
    title: 'Product research',
    description: 'Digest customer feedback, benchmark competitors, and surface actionable insight in a single collaborative view.',
    stat: '67% less switching'
  },
  {
    title: 'Engineering velocity',
    description: 'Compare implementations, generate tests, and manage documentation without leaving your unified canvas.',
    stat: '30% fewer regressions'
  }
];
const UseCasesSection = () => {
  return <section id="use-cases" className="relative py-28">
      <div className="absolute inset-x-0 top-10 h-[600px] -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,119,237,0.08),_transparent_70%)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-900">Real teams. Real impact.</h2>
          <p className="mx-auto max-w-2xl text-lg text-apple-gray-500">
            The calm Viora interface scales from individual creators to global organisations, without compromising craft.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {useCases.map(useCase => <article key={useCase.title} className="reveal backdrop-glow rounded-[30px] border border-white/50 bg-white/85 p-10 text-left shadow-[0_25px_60px_-50px_rgba(0,0,0,0.65)]">
              <div className="text-xs uppercase tracking-[0.3em] text-apple-gray-400">{useCase.stat}</div>
              <h3 className="mt-6 text-2xl font-semibold text-apple-gray-900">{useCase.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-apple-gray-500">{useCase.description}</p>
              <div className="mt-10 flex items-center space-x-3 text-sm font-medium text-primary">
                <span>See workflows</span>
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-primary/40">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
};
export default UseCasesSection;