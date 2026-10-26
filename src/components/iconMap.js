import {
  Armchair,
  CalendarCheck,
  Heart,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

// Icon names referenced from src/config/clinic.js.
const icons = {
  Armchair,
  CalendarCheck,
  Heart,
  Phone,
  ShieldCheck,
  Users,
};

/** Returns the Lucide icon for a configured name, falling back to a neutral icon. */
export function getIcon(name) {
  return icons[name] ?? Sparkles;
}
