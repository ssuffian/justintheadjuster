import Image from 'next/image'

const reasons = [
  {
    title: 'Licensed in PA & NJ',
    description:
      'Fully licensed public adjuster in both Pennsylvania and New Jersey — we know the state regulations and insurance laws that protect you.',
  },
  {
    title: 'No Upfront Cost',
    description:
      'We work on contingency. Our fee is a percentage of your settlement — you pay nothing out of pocket, and nothing if we don\'t win.',
  },
  {
    title: 'Policyholders Only',
    description:
      'Justin has never worked for an insurance carrier and never will. His only client is you — which means his only goal is your best outcome.',
  },
  {
    title: 'Bigger Payouts',
    description:
      'Claimants who hire a public adjuster consistently receive significantly higher settlements than those who go it alone. Justin\'s documentation and negotiation experience makes the difference.',
  },
  {
    title: 'Detail-Driven Documentation',
    description:
      'Justin uses the same industry-standard estimating software that carriers use — so nothing gets missed, minimized, or left off your claim.',
  },
  {
    title: 'Stress-Free Process',
    description:
      'Dealing with insurance after a disaster is overwhelming. Justin handles all communication, paperwork, and negotiations so you don\'t have to.',
  },
]

export default function WhyJustin() {
  return (
    <section id="why-justin" className="py-28 px-6 bg-[#141414] relative">
      <div className="absolute right-0 top-0 bottom-0 w-1.5 gold-foil-stripe opacity-80" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-gold/60 text-[10px] tracking-[0.45em] uppercase font-body mb-4">The Difference</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
              Why Choose<br />
              <span className="font-script gold-shimmer" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                Justin?
              </span>
            </h2>

            <div className="gold-divider mb-8" />

            <p className="text-cream/75 font-body leading-relaxed text-[15px] mb-8">
              Filing a property claim without professional help is like going to court without a
              lawyer. Justin Ginsberg knows the process, the language, and the tactics insurers use
              to minimize payouts&mdash;and he uses that knowledge to put more money in your pocket.
            </p>

            <div className="border border-gold/25 bg-[#1a1a1a] relative overflow-hidden">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="flex items-center gap-4 p-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-gold/40">
                  <Image
                    src="/justin-headshot.png"
                    alt="Justin Ginsberg"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-script gold-shimmer" style={{ fontSize: '2rem' }}>
                    Trust in Justin
                  </p>
                  <p className="text-cream/55 text-xs font-body italic mt-0.5">
                    &ldquo;Your Advocate When It Matters Most&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — reasons list */}
          <div className="space-y-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex gap-4 p-5 bg-[#1a1a1a] border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
              >
                {/* Checkmark box */}
                <div className="flex-shrink-0 w-8 h-8 border border-gold/35 flex items-center justify-center text-gold text-sm font-bold group-hover:bg-gold/8 transition-colors rounded-sm">
                  &#10003;
                </div>
                <div>
                  <h3 className="font-display text-lg text-cream font-medium mb-1">{reason.title}</h3>
                  <p className="text-cream/75 text-sm leading-relaxed font-body">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
