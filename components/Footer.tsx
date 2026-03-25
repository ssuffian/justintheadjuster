export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] border-t-2 border-[#8B6914] relative">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-bold uppercase text-[#C9A84C]">
              Justin the Adjuster
            </p>
            <p className="text-white/50 text-sm font-body leading-relaxed mt-2">
              Your advocate when it matters most. Licensed public adjuster serving
              Pennsylvania and New Jersey.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[#C9A84C]/70 text-[10px] tracking-[0.45em] uppercase font-body font-bold mb-5">
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
                    className="text-white/40 hover:text-[#C9A84C] text-sm transition-colors font-body"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#C9A84C]/70 text-[10px] tracking-[0.45em] uppercase font-body font-bold mb-5">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="tel:2672212763"
                className="block text-white/55 hover:text-[#C9A84C] text-sm transition-colors font-body"
              >
                267-221-2763
              </a>
              <a
                href="mailto:justintheadjusterpa@gmail.com"
                className="block text-white/55 hover:text-[#C9A84C] text-sm transition-colors font-body break-all"
              >
                justintheadjusterpa@gmail.com
              </a>
              <p className="text-white/35 text-sm font-body">
                Licensed in PA &amp; NJ
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-body">
            &copy; {year} Justin the Adjuster. All rights reserved. Licensed Public Adjuster &mdash; PA &amp; NJ.
          </p>
          <p className="text-white/18 text-xs font-body italic">
            Justin the Adjuster &mdash; Your Advocate When It Matters Most
          </p>
        </div>
      </div>
    </footer>
  )
}
