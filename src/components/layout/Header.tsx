import { FiCode, FiMail } from "react-icons/fi";
import { navItems } from "../../data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(8,8,10,0.5)] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-white/5 text-emerald-300 glow-ring">
            <FiCode />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Habiba El Mahfoudi</p>
            <p className="text-xs text-white/45">Full-Stack • Mobile • UX</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/65 transition hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 transition hover:border-emerald-300/40 hover:bg-emerald-400/16"
        >
          <FiMail />
          Collaborons
        </a>
      </div>
    </header>
  );
}
