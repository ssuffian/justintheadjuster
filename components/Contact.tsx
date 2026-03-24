export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#141414] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 gold-foil-stripe opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,168,76,0.05),transparent)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-gold/60 text-[10px] tracking-[0.45em] uppercase font-body mb-4">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4">
          Ready to <span className="italic text-gold">Fight For You</span>
        </h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />

        <p className="text-cream/65 font-body text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Call or text Justin directly. He&rsquo;ll take a look at your situation,
          give you an honest read, and tell you exactly what he can do for you&mdash;no
          pressure, no commitment.
        </p>

        {/* Big phone CTA */}
        <a
          href="tel:2672212763"
          className="inline-block font-display font-semibold gold-shimmer hover:scale-105 transition-transform mb-2"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          267-221-2763
        </a>
        <p className="text-cream/40 text-[11px] tracking-[0.4em] uppercase font-body mb-12">
          Call or text anytime &mdash; 7 days a week
        </p>

        {/* Email card */}
        <a
          href="mailto:justintheadjusterpa@gmail.com"
          className="inline-block border border-gold/20 bg-[#1a1a1a] hover:border-gold/45 transition-colors px-8 py-5 group"
        >
          <p className="text-gold/50 text-[10px] tracking-widest uppercase font-body mb-1">Email</p>
          <p className="text-cream/80 text-sm font-body group-hover:text-gold transition-colors">justintheadjusterpa@gmail.com</p>
        </a>
      </div>
    </section>
  )
}
