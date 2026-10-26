import { clinic } from "../config/clinic";

/**
 * Demo disclaimer. Shown only when both demo flags are enabled in clinic.js.
 * variant="banner" appears at the top of the page; variant="footer" appears in the footer.
 */
export default function DemoNotice({ variant = "banner" }) {
  const { isDemo, showDemoNotice } = clinic.demo;
  if (!(isDemo && showDemoNotice)) return null;

  const message =
    variant === "banner"
      ? "This is a demonstration website. The clinic details, images, and patient reviews shown here are fictional sample content."
      : "This is a demonstration website. All clinic details and reviews are sample content.";

  return (
    <div className={`demo-notice demo-notice--${variant}`} role="note">
      <strong>Demo:</strong> {message}
    </div>
  );
}
