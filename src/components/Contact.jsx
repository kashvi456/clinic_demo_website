import {
  CalendarCheck,
  ClipboardList,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";
import { clinic, displayAddress } from "../config/clinic";
import Reveal from "./Reveal";

export default function Contact() {
  const { content, contact } = clinic;

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <Reveal>
          <p className="eyebrow">Contact &amp; Appointments</p>
          <h2 className="section-title">{content.contactTitle}</h2>
          <p className="section-lead">{content.contactDescription}</p>

          <ul className="contact-details">
            <li>
              <span className="icon-badge">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="contact-details__label">Location</h3>
                <p>{displayAddress}</p>
              </div>
            </li>
            <li>
              <span className="icon-badge">
                <Phone size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="contact-details__label">Telephone</h3>
                <a href={contact.tel} className="contact-phone">
                  {contact.phone}
                </a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="card contact-card" delay={120}>
          <h3 className="contact-card__title">Ready to visit us?</h3>
          <p>
            Tap a button below to call the clinic from your phone. Our reception
            team will help you book a new appointment or check an existing one.
          </p>

          <div className="contact-card__actions">
            <a href={contact.tel} className="btn btn--primary btn--block">
              <CalendarCheck size={18} aria-hidden="true" />
              Book an Appointment
            </a>
            <a href={contact.tel} className="btn btn--outline btn--block">
              <ClipboardList size={18} aria-hidden="true" />
              Check Your Appointment
            </a>
            <a href={contact.tel} className="btn btn--outline btn--block">
              <PhoneCall size={18} aria-hidden="true" />
              Call the Clinic
            </a>
          </div>

          <p className="contact-card__note">
            Appointments are confirmed by our reception team over the phone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
