export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Tile grid texture */}
      <div className="absolute inset-0 tile-bg" />

      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,76,0.18)_0%,transparent_70%)]" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0a0a0a]" />

      {/* Gold foil edge stripes */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-foil-stripe opacity-80" />
      <div className="absolute right-0 top-0 bottom-0 w-1.5 gold-foil-stripe opacity-80" />


      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Licensed badge */}
        <div className="inline-flex items-center gap-3 mb-10 animate-fade-up">
          <div className="hidden sm:block h-px w-10 bg-gold/40" />
          <span className="text-gold text-[10px] tracking-[0.3em] sm:tracking-[0.45em] uppercase font-body">
            Licensed Public Adjuster &middot; Pennsylvania &amp; New Jersey
          </span>
          <div className="hidden sm:block h-px w-10 bg-gold/40" />
        </div>

        {/* Main script headline */}
        <h1 className="font-script leading-none gold-shimmer animate-fade-up delay-200"
          style={{ fontSize: 'clamp(2.8rem, 12vw, 9rem)' }}>
          Justin the Adjuster
        </h1>

        {/* Primary tagline */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-cream/85 font-light italic leading-tight max-w-3xl mx-auto animate-fade-up delay-400">
          Trust in Justin
        </h2>

        {/* Sub tagline */}
        <p className="text-cream/65 text-[11px] tracking-[0.35em] uppercase font-body mt-4 mb-12 animate-fade-up delay-500">
          Your Advocate When It Matters Most
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-600">
          <a
            href="#contact"
            className="btn-gold text-black font-semibold px-8 py-4 text-xs tracking-[0.2em] uppercase rounded-sm w-full sm:w-auto"
          >
            Get a Free Claim Review
          </a>
          <a
            href="tel:2672212763"
            className="btn-outline-gold px-8 py-4 text-xs tracking-[0.2em] uppercase rounded-sm w-full sm:w-auto font-body"
          >
            Call 267-221-2763
          </a>
        </div>

        {/* Damage type pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-2.5 animate-fade-up delay-700">
          {['Roof', 'Siding', 'Water', 'Fire', 'Storm'].map((s) => (
            <span
              key={s}
              className="text-[10px] text-gold/80 tracking-[0.25em] uppercase border border-gold/40 px-4 py-1.5 rounded-sm"
            >
              {s} Damage
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-800 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
        <span className="text-gold/30 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
