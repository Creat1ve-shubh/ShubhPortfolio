/**
 * Decorative panel that lifts off a section as it scrolls into view (driven by MotionEffects).
 * Hidden unless JavaScript is running and the visitor allows motion.
 */
export default function Curtain({ number, label }) {
  return (
    <div className="curtain" aria-hidden="true">
      <span className="curtain-label"><b>{number}</b> {label}</span>
    </div>
  );
}
