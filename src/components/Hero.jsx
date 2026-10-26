import { ArrowDown, Phone } from "lucide-react";
import { clinic } from "../config/clinic";
import { getIcon } from "./iconMap";

export default function Hero() {
  const { content, images, contact, trustIndicators, tagline } = clinic;

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{tagline}</p>
          <h1 className="hero__title">{content.heroTitle}</h1>
          <p className="hero__subtitle">{content.heroSubtitle}</p>

          <div className="btn-group">
            <a href={contact.tel} className="btn btn--primary">
              <Phone size={18} aria-hidden="true" />
              Book an Appointment
            </a>
            <a href="#about" className="btn btn--outline">
              <ArrowDown size={18} aria-hidden="true" />
              Explore Our Clinic
            </a>
          </div>

          <ul className="trust-list" aria-label="Why patients choose us">
            {trustIndicators.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <li key={item.label}>
                  <Icon size={20} aria-hidden="true" />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hero__image">
          <img
            src={images.hero}
            alt={images.heroAlt}
            width="1672"
            height="941"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
