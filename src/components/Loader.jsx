import { useEffect, useRef } from 'react';

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add('hidden');
        setTimeout(onComplete, 800);
      }
    }, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div id="loader" ref={loaderRef}>
      <div className="loader-logo">Lassi Lehar</div>
      <div className="loader-line" />
      <div className="loader-sub">Sandur, Karnataka</div>
      <div className="loader-progress" />
    </div>
  );
}
