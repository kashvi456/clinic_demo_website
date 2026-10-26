import { clinic, displayAddress } from "../config/clinic";
import DemoNotice from "./DemoNotice";

const socialLabels = {
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  // Only show social links that have a non-empty URL in the configuration.
  const socialLinks = Object.entries(clinic.socialLinks).filter(
    ([, url]) => typeof url === "string" && url.trim() !== ""
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-name">{clinic.name}</p>
            <p className="footer-tagline">{clinic.tagline}</p>
            <DemoNotice variant="footer" />
          </div>

          <div>
            <h2 className="footer-heading">Visit &amp; Call</h2>
            <p>{displayAddress}</p>
            <p>
              <a href={clinic.contact.tel}>{clinic.contact.phone}</a>
            </p>
          </div>

          <div>
            <h2 className="footer-heading">Quick Links</h2>
            <nav aria-label="Footer">
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {socialLinks.length > 0 && (
              <>
                <h2 className="footer-heading">Follow Us</h2>
                <ul className="footer-links">
                  {socialLinks.map(([key, url]) => (
                    <li key={key}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {socialLabels[key] ?? key}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {clinic.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
