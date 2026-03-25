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
    <section id="why-justin" className="pt-14 pb-28 px-6 bg-[#D4B870] relative">
      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#1a1a1a]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[#1a1a1a]/50 text-[10px] tracking-[0.45em] uppercase font-body font-bold mb-4">The Difference</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] font-bold uppercase leading-tight mb-6">
              Why Choose<br />
              <span className="text-[#1a1a1a]/70">Justin?</span>
            </h2>

            <div className="dark-divider mb-8" />

            <p className="text-[#1a1a1a]/75 font-body leading-relaxed text-[15px] mb-8">
              Filing a property claim without professional help is like going to court without a
              lawyer. Justin Ginsberg knows the process, the language, and the tactics insurers use
              to minimize payouts&mdash;and he uses that knowledge to put more money in your pocket.
            </p>

            <div className="border-2 border-[#1a1a1a]/20 bg-[#C9A84C] relative overflow-hidden">
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#1a1a1a]/15" />
              <div className="flex items-center gap-4 p-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-[#1a1a1a]/30">
                  <Image
                    src="/justin-headshot.png"
                    alt="Justin Ginsberg"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold uppercase text-[#1a1a1a]">
                    Trust in Justin
                  </p>
                  <p className="text-[#1a1a1a]/55 text-xs font-body mt-0.5">
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
                className="flex gap-4 p-5 bg-[#C9A84C] border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30 transition-all duration-300 group"
              >
                {/* Checkmark box */}
                <div className="flex-shrink-0 w-8 h-8 border-2 border-[#1a1a1a]/30 flex items-center justify-center text-[#1a1a1a] text-sm font-bold group-hover:bg-[#1a1a1a]/5 transition-colors rounded-sm">
                  &#10003;
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#1a1a1a] font-bold uppercase mb-1">{reason.title}</h3>
                  <p className="text-[#1a1a1a]/75 text-sm leading-relaxed font-body">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
