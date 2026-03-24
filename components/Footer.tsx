export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-gold/12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="font-script gold-shimmer" style={{ fontSize: '2.2rem' }}>
              Justin the Adjuster
            </p>
            <p className="text-cream/35 text-sm font-body leading-relaxed">
              Your advocate when it matters most. Licensed public adjuster serving
              Pennsylvania and New Jersey.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-gold/55 text-[10px] tracking-[0.45em] uppercase font-body mb-5">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {[
                ['About', '#about'],
                ['Services', '#services'],
                ['How It Works', '#how-it-works'],
                ['Why Justin', '#why-justin'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-cream/40 hover:text-gold text-sm transition-colors font-body"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold/55 text-[10px] tracking-[0.45em] uppercase font-body mb-5">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="tel:2672212763"
                className="block text-cream/55 hover:text-gold text-sm transition-colors font-body"
              >
                267-221-2763
              </a>
              <a
                href="mailto:justintheadjusterpa@gmail.com"
                className="block text-cream/55 hover:text-gold text-sm transition-colors font-body break-all"
              >
                justintheadjusterpa@gmail.com
              </a>
              <p className="text-cream/35 text-sm font-body">
                Licensed in PA &amp; NJ
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs font-body">
            &copy; {year} Justin the Adjuster. All rights reserved. Licensed Public Adjuster &mdash; PA &amp; NJ.
          </p>
          <p className="text-cream/18 text-xs font-body italic">
            Justin the Adjuster &mdash; Your Advocate When It Matters Most
          </p>
        </div>
      </div>
    </footer>
  )
}
