const services = [
  {
    title: 'Roof Damage',
    description:
      'Hail, wind, and storm damage can compromise your roof\'s integrity in ways that aren\'t always visible. Justin documents every shingle, flashing, and structural component to make sure your claim covers the full cost of repair or replacement.',
    keywords: ['Hail Damage', 'Wind Damage', 'Missing Shingles', 'Structural Damage'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Siding Damage',
    description:
      'Storm-driven debris and hail can crack, dent, or break your siding. Justin thoroughly assesses every panel and pushes for a proper, full replacement — including matching color and material.',
    keywords: ['Hail Impact', 'Wind Damage', 'Cracked Panels', 'Color Match'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Water Damage',
    description:
      'Water damage spreads fast and hidden moisture causes long-term structural issues. Justin identifies all affected areas — including damage behind walls and under floors — and builds a claim that covers complete remediation.',
    keywords: ['Pipe Bursts', 'Flooding', 'Mold Risk', 'Hidden Moisture'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Fire Damage',
    description:
      'Fire damage extends far beyond the burn zone — smoke, soot, and water from firefighting efforts affect the entire property. Justin captures the full scope of losses so nothing gets left out of your settlement.',
    keywords: ['Smoke Damage', 'Soot Cleanup', 'Structural Loss', 'Content Claims'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: 'Storm Damage',
    description:
      'Hurricanes, nor\'easters, and severe storms devastate properties across PA and NJ. We handle all storm-related claims comprehensively — roof, siding, windows, fencing, and full structural damage.',
    keywords: ["Hurricane", "Nor'easter", 'Hail', 'Wind & Rain'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="pt-28 pb-0 px-6 bg-[#141414] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold/60 text-[10px] tracking-[0.45em] uppercase font-body mb-4">What We Handle</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-5">
            Claims We <span className="italic text-gold">Fight For</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Top 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        {/* Bottom 2 — centered */}
        <div className="grid md:grid-cols-2 gap-5 mt-5 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="service-card bg-[#1a1a1a] p-5 rounded-sm relative overflow-hidden group flex gap-4 items-start">
      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-14 h-px bg-gradient-to-r from-gold/50 to-transparent" />
      <div className="absolute top-0 left-0 h-14 w-px bg-gradient-to-b from-gold/50 to-transparent" />

      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">{service.icon}</div>

      <div>
        {/* Title */}
        <h3 className="font-display text-lg text-gold font-medium mb-2 tracking-wide">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-cream/75 text-sm leading-relaxed font-body">
          {service.description}
        </p>
      </div>

      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
