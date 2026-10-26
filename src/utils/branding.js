// Maps keys in clinic.branding to the CSS custom properties used by index.css.
const BRAND_VARIABLES = {
  primaryColor: "--color-primary",
  secondaryColor: "--color-secondary",
  accentColor: "--color-accent",
  textColor: "--color-text",
  backgroundColor: "--color-background",
};

/**
 * Writes the configured brand colors onto :root so every component
 * picks them up through var(--color-*). Call once at startup.
 */
export function applyBranding(branding = {}) {
  const root = document.documentElement;
  Object.entries(BRAND_VARIABLES).forEach(([key, cssVar]) => {
    if (branding[key]) {
      root.style.setProperty(cssVar, branding[key]);
    }
  });
}
