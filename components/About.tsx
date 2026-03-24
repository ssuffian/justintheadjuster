import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#111111] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-foil-stripe opacity-80" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Justin's photo with gold frame */}
          <div className="relative flex flex-col items-center">
            {/* Photo frame */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Gold border frame */}
              <div className="absolute inset-0 border border-gold/40 z-10 pointer-events-none" />
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold z-20" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold z-20" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold z-20" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold z-20" />
              {/* Gold glow behind photo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12),transparent_70%)] z-0" />
              <Image
                src="/justin-headshot-full.png"
                alt="Justin Ginsberg — Licensed Public Adjuster"
                width={400}
                height={520}
                className="relative z-10 w-full object-cover grayscale-[20%]"
                priority
              />
              {/* Bottom overlay with name */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-6 py-5">
                <p className="font-script text-3xl gold-shimmer">Justin Ginsberg</p>
                <p className="text-cream/70 text-xs tracking-widest uppercase font-body mt-1">
                  Licensed Public Adjuster &mdash; PA &amp; NJ
                </p>
              </div>
            </div>

            {/* Stats row below photo */}
            <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-sm">
              {[
                { num: '100%', label: 'Client Focused' },
                { num: '$0', label: 'Upfront Cost' },
                { num: 'PA+NJ', label: 'Licensed' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-gold/20 py-4 bg-[#1a1a1a]">
                  <div className="font-display text-2xl font-semibold text-gold">{stat.num}</div>
                  <div className="text-cream/50 text-[10px] tracking-widest uppercase mt-1 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <p className="text-gold/60 text-[10px] tracking-[0.45em] uppercase font-body mb-4">About Justin</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight mb-6">
              Know What<br />
              <span className="italic text-gold">You&rsquo;re Owed.</span>
            </h2>

            <div className="gold-divider mb-8" />

            <div className="space-y-5 text-cream/80 font-body leading-relaxed text-[15px]">
              <p>
                Most homeowners don&rsquo;t realize they have the right to hire their own adjuster
                after a property loss. Justin Ginsberg built his career around that gap&mdash;making
                sure policyholders in Pennsylvania and New Jersey get a{' '}
                <strong className="text-cream/85">thorough, professional assessment</strong> of
                their claim, not just whatever the insurer decides to offer.
              </p>
              <p>
                Justin brings the same tools, software, and industry knowledge to your claim that
                carriers use on their end. He documents every detail, builds a complete picture of
                your loss, and negotiates with the experience of someone who has been through this
                process{' '}
                <strong className="text-cream/85">hundreds of times</strong>.
              </p>
              <p>
                Roof, siding, water, fire, storm&mdash;whatever the damage, Justin manages the
                entire claim so you can focus on what actually matters: getting back to normal.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="#contact"
                className="btn-gold text-black font-semibold px-6 py-3 text-xs tracking-widest uppercase rounded-sm"
              >
                Work With Justin
              </a>
              <a
                href="tel:2672212763"
                className="text-gold/60 hover:text-gold text-sm font-body transition-colors"
              >
                267-221-2763 &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
