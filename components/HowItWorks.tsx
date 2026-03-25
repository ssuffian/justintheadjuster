const steps = [
  {
    number: '01',
    title: 'Free Claim Review',
    description:
      'Contact Justin for a no-obligation review of your damage and your policy. We\'ll assess what you\'re owed and explain your options — at zero cost to you.',
  },
  {
    number: '02',
    title: 'We Handle Everything',
    description:
      'Justin takes over your claim: documenting all damage, filing paperwork, communicating with the insurer, and negotiating aggressively on your behalf.',
  },
  {
    number: '03',
    title: 'Maximum Settlement',
    description:
      'You receive the maximum settlement you\'re entitled to. Our fee is a percentage of your settlement — we only get paid when you do. No upfront cost, ever.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-[#B8952E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#1a1a1a]/50 text-[10px] tracking-[0.45em] uppercase font-body font-bold mb-4">The Process</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] font-bold uppercase mb-5">
            How It <span className="text-[#1a1a1a]/70">Works</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#1a1a1a]/20 mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-10 h-0.5 bg-[#1a1a1a]/15"
            style={{ left: '16.5%', right: '16.5%' }}
          />

          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-[#1a1a1a]/30 bg-[#C9A84C] flex items-center justify-center relative z-10">
                  <span className="font-display text-2xl font-bold text-[#1a1a1a]">{step.number}</span>
                </div>
              </div>

              <h3 className="font-display text-2xl text-[#1a1a1a] font-bold uppercase mb-4">{step.title}</h3>
              <p className="text-[#1a1a1a]/75 text-sm leading-relaxed font-body">{step.description}</p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-10 -right-3 text-[#1a1a1a]/30 text-xl z-20 leading-none">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Contingency note */}
        <div className="mt-16 text-center">
          <div className="inline-block border-2 border-[#1a1a1a]/18 px-10 py-5 bg-[#C9A84C]">
            <p className="text-[#1a1a1a]/70 text-sm font-body">
              <span className="text-[#1a1a1a] font-bold">No upfront cost.</span>{' '}
              We work on contingency — you pay nothing unless we win your claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
