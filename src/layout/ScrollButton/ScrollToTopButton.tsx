import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Mostrar el botón si el scroll es mayor a 200px
    } else {
      setIsVisible(false); // Ocultar el botón si el scroll es menor a 200px
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <svg width="50%" height="50%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3334 5.43737V21.6667H9.66673V5.43737L2.51473 12.5894L0.629395 10.704L11.0001 0.333374L21.3707 10.704L19.4854 12.5894L12.3334 5.43737Z" fill="#001018" />
      </svg>

    </button>
  );
}