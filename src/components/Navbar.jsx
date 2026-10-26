import { useEffect, useState } from "react";
import { Menu, Phone, Stethoscope, X } from "lucide-react";
import { clinic } from "../config/clinic";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo" aria-hidden="true">
            <Stethoscope size={20} />
          </span>
          <span className="navbar__name">{clinic.name}</span>
        </a>

        <div className="navbar__actions">
          <a href={clinic.contact.tel} className="btn btn--primary btn--sm">
            <Phone size={16} aria-hidden="true" />
            Call
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          id="primary-nav"
          className={`navbar__nav${menuOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={clinic.contact.tel}
            className="btn btn--primary navbar__cta"
            onClick={closeMenu}
          >
            <Phone size={18} aria-hidden="true" />
            Book an Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
