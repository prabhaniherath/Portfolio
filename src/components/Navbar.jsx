
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Research", link: "#research" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-[1000] w-full border-b border-[var(--border)] bg-[rgba(8,9,13,0.8)] backdrop-blur-[16px]">
      <div className="mx-auto flex h-[75px] w-[92%] max-w-[1180px] items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--text)]"
          onClick={closeMenu}
        >
          PH
        </a>

        {/* Desktop and Mobile Navigation */}
        <ul
          className={`absolute left-0 top-[75px] w-full flex-col gap-0 border-b border-[var(--border)] bg-[#0b0c11] px-0 py-2 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-[30px] md:border-0 md:bg-transparent md:p-0 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <li
              className="w-full text-center md:w-auto"
              key={item.name}
            >
              <a
                href={item.link}
                onClick={closeMenu}
                className="block px-4 py-[15px] text-sm text-[var(--text-light)] transition hover:text-[var(--text)] md:p-0"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Let's Talk Button */}
        <a
          href="#contact"
          className="hidden rounded-lg border border-[var(--primary)] px-5 py-2.5 text-white transition hover:bg-[var(--primary)] md:block"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="block border-0 bg-transparent text-[1.7rem] text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;