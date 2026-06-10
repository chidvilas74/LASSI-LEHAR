export default function Toast({ message, show }) {
  return (
    <div className={`toast${show ? ' show' : ''}`} role="alert" aria-live="polite">
      ✓ &nbsp;{message}
    </div>
  );
}
