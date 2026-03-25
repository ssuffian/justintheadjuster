const testimonials = [
  {
    name: 'Michael R.',
    location: 'Philadelphia, PA',
    rating: 5,
    service: 'Roof & Storm Damage',
    quote:
      'After the storm, my insurance company offered me a fraction of what I needed to fix my roof. Justin stepped in, documented everything properly, and got me nearly three times the original offer. I couldn\'t believe the difference. Truly your advocate when it matters most.',
  },
  {
    name: 'Sandra K.',
    location: 'Cherry Hill, NJ',
    rating: 5,
    service: 'Water Damage',
    quote:
      'A pipe burst in my house and I was completely overwhelmed. Justin handled everything from start to finish. He found damage I didn\'t even know existed and made sure it was all included. Professional, responsive, and he got results.',
  },
  {
    name: 'David & Lisa T.',
    location: 'Bucks County, PA',
    rating: 5,
    service: 'Fire Damage',
    quote:
      'We had a kitchen fire that spread smoke throughout our entire home. Justin\'s expertise in documenting smoke and soot damage — areas we hadn\'t even thought to include — made a massive difference in our final settlement. Highly recommend.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#1a1a1a] text-base leading-none">&#9733;</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[#B8952E] relative overflow-hidden">
      <div className="absolute inset-0 brick-bg opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1a1a1a]/50 text-[10px] tracking-[0.45em] uppercase font-body font-bold mb-4">What Clients Say</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] font-bold uppercase mb-5">
            Real Results. <span className="text-[#1a1a1a]/70">Real People.</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#1a1a1a]/20 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#D4B870] border border-[#1a1a1a]/12 p-7 relative hover:border-[#1a1a1a]/30 transition-all duration-300 group"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1a1a1a]/15" />

              {/* Decorative quote mark */}
              <div className="font-display text-7xl text-[#1a1a1a]/10 leading-none -mt-3 mb-3 select-none">&ldquo;</div>

              <Stars count={t.rating} />

              <span className="inline-block mt-3 mb-4 text-[10px] text-[#1a1a1a]/50 border border-[#1a1a1a]/15 px-2.5 py-1 tracking-wider font-body font-bold">
                {t.service}
              </span>

              <p className="text-[#1a1a1a]/80 text-sm leading-relaxed font-body italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="dark-divider mb-4" />

              <p className="text-[#1a1a1a]/90 font-display font-bold uppercase">{t.name}</p>
              <p className="text-[#1a1a1a]/45 text-xs tracking-wider mt-0.5 font-body">{t.location}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#1a1a1a]/25 text-[10px] tracking-widest uppercase mt-10 font-body">
          Testimonials represent typical client experiences
        </p>
      </div>
    </section>
  )
}
