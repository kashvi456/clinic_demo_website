import { Star } from "lucide-react";
import { clinic } from "../config/clinic";
import { testimonials } from "../data/testimonials";
import Reveal from "./Reveal";

export default function Testimonials() {
  const showSampleLabel = clinic.demo.isDemo;

  return (
    <section id="testimonials" className="section section--tint">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">What Our Patients Say</h2>

          {showSampleLabel && (
            <p className="sample-label" role="note">
              <strong>Sample Testimonials — Demo Content.</strong> These reviews
              are illustrative and fictional. Replace them with genuine,
              client-approved feedback before this website is used by a real
              clinic.
            </p>
          )}
        </header>

        <div className="grid-cards grid-cards--3">
          {testimonials.map((item, index) => (
            <Reveal
              as="article"
              key={item.id}
              className="card review"
              delay={index * 80}
            >
              <div
                className="review__stars"
                role="img"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={18}
                    aria-hidden="true"
                    fill={starIndex < item.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="review__text">“{item.review}”</p>

              <div className="review__author">
                <span className="avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <p className="review__name">{item.name}</p>
                  {showSampleLabel && (
                    <p className="review__tag">Sample review</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
