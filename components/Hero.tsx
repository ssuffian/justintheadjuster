export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#C9A84C] brick-bg"
    >
      {/* Subtle warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_70%)]" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#B8952E]" />

      {/* Side accents */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1a1a1a]" />
      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#1a1a1a]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Licensed badge */}
        <div className="inline-flex items-center gap-3 mb-10 animate-fade-up">
          <div className="hidden sm:block h-px w-10 bg-black/30" />
          <span className="text-[#1a1a1a] text-[10px] tracking-[0.3em] sm:tracking-[0.45em] uppercase font-body font-semibold">
            Licensed Public Adjuster &middot; Pennsylvania &amp; New Jersey
          </span>
          <div className="hidden sm:block h-px w-10 bg-black/30" />
        </div>

        {/* Main headline */}
        <h1 className="font-display font-bold uppercase leading-none text-[#1a1a1a] animate-fade-up delay-200"
          style={{ fontSize: 'clamp(2.8rem, 12vw, 8rem)' }}>
          Justin the Adjuster
        </h1>

        {/* Primary tagline */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a]/80 font-medium uppercase tracking-wider leading-tight max-w-3xl mx-auto animate-fade-up delay-400">
          Trust in Justin
        </h2>

        {/* Sub tagline */}
        <p className="text-[#1a1a1a]/60 text-[11px] tracking-[0.35em] uppercase font-body font-semibold mt-4 mb-12 animate-fade-up delay-500">
          Your Advocate When It Matters Most
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 animate-fade-up delay-600">
          <a
            href="tel:2672212763"
            className="btn-black font-display font-bold px-8 py-4 text-xs tracking-[0.2em] uppercase rounded-sm w-full sm:w-auto"
          >
            Call 267-221-2763
          </a>
          <p className="text-[#1a1a1a]/50 text-[10px] tracking-[0.25em] uppercase font-body font-semibold">
            Get a free claim review
          </p>
        </div>

        {/* Damage type pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-2.5 animate-fade-up delay-700">
          {['Roof', 'Siding', 'Water', 'Fire', 'Storm'].map((s) => (
            <span
              key={s}
              className="text-[10px] text-[#1a1a1a]/80 tracking-[0.25em] uppercase font-bold border-2 border-[#1a1a1a]/30 px-4 py-1.5 rounded-sm font-body"
            >
              {s} Damage
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-800 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-black/40 to-transparent animate-pulse" />
        <span className="text-[#1a1a1a]/30 text-[9px] tracking-[0.4em] uppercase font-body font-bold">Scroll</span>
      </div>
    </section>
  )
}
