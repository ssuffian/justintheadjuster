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
    <section id="how-it-works" className="py-28 px-6 bg-[#111111] relative overflow-hidden">
      {/* Subtle center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201,168,76,0.04),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gold/60 text-[10px] tracking-[0.45em] uppercase font-body mb-4">The Process</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-5">
            How It <span className="italic text-gold">Works</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-10 h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20"
            style={{ left: '16.5%', right: '16.5%' }}
          />

          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full border border-gold/40 bg-[#111111] flex items-center justify-center relative z-10">
                  <span className="font-display text-2xl font-bold text-gold">{step.number}</span>
                </div>
                {/* Glow halo */}
                <div className="absolute inset-0 rounded-full bg-gold/5 blur-xl scale-150" />
              </div>

              <h3 className="font-display text-2xl text-cream font-medium mb-4">{step.title}</h3>
              <p className="text-cream/75 text-sm leading-relaxed font-body">{step.description}</p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-10 -right-3 text-gold/35 text-xl z-20 leading-none">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Contingency note */}
        <div className="mt-16 text-center">
          <div className="inline-block border border-gold/18 px-10 py-5 bg-gold/[0.04]">
            <p className="text-cream/65 text-sm font-body">
              <span className="text-gold font-medium">No upfront cost.</span>{' '}
              We work on contingency — you pay nothing unless we win your claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
