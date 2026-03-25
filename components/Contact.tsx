export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#C9A84C] relative brick-bg">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1a1a1a]/15" />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1a1a1a]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[#1a1a1a]/50 text-[10px] tracking-[0.45em] uppercase font-body font-bold mb-4">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] font-bold uppercase mb-4">
          Ready to <span className="text-[#1a1a1a]/70">Fight For You</span>
        </h2>
        <div className="w-20 h-0.5 bg-[#1a1a1a]/20 mx-auto mb-10" />

        <p className="text-[#1a1a1a]/65 font-body text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Call or text Justin directly. He&rsquo;ll take a look at your situation,
          give you an honest read, and tell you exactly what he can do for you&mdash;no
          pressure, no commitment.
        </p>

        {/* Big phone CTA */}
        <a
          href="tel:2672212763"
          className="inline-block font-display font-bold uppercase text-[#1a1a1a] hover:scale-105 transition-transform mb-2"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          267-221-2763
        </a>
        <p className="text-[#1a1a1a]/40 text-[11px] tracking-[0.4em] uppercase font-body font-semibold mb-12">
          Call or text anytime &mdash; 7 days a week
        </p>

        {/* Email card */}
        <a
          href="mailto:justintheadjusterpa@gmail.com"
          className="inline-block border-2 border-[#1a1a1a]/20 bg-[#D4B870] hover:border-[#1a1a1a]/40 transition-colors px-8 py-5 group"
        >
          <p className="text-[#1a1a1a]/50 text-[10px] tracking-widest uppercase font-body font-bold mb-1">Email</p>
          <p className="text-[#1a1a1a]/80 text-sm font-body group-hover:text-[#1a1a1a] transition-colors">justintheadjusterpa@gmail.com</p>
        </a>
      </div>
    </section>
  )
}
