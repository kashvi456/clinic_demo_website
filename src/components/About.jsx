import { clinic } from "../config/clinic";
import { getIcon } from "./iconMap";
import Reveal from "./Reveal";

export default function About() {
  const { content, images, aboutFeatures } = clinic;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__media">
            <img
              src={images.about}
              alt={images.aboutAlt}
              width="1672"
              height="941"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="about__content" delay={120}>
            <p className="eyebrow">About Us</p>
            <h2 className="section-title">{content.aboutTitle}</h2>
            <p className="section-lead">{content.aboutDescription}</p>
          </Reveal>
        </div>

        <div className="grid-cards grid-cards--4 about__features">
          {aboutFeatures.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <Reveal
                as="article"
                key={feature.title}
                className="card feature-card"
                delay={index * 90}
              >
                <span className="icon-badge">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
