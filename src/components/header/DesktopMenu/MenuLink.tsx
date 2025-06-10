import { useState, useEffect } from "react";
import styles from './styles.module.css';
import { base_url } from '../../../../utils/global';

interface MenuLinkProps {
  path: string;  // e.g., '/', '/blog', '/#profile'
  label: string;
}

export default function MenuLink({ path, label }: MenuLinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateActiveState = () => {
      const { pathname, hash } = window.location;
      const normalizedPath = pathname.replace(/^\/(en|es|fr)(?=\/|$)/, "");

      if (path.startsWith("/#")) {
        const expectedHash = path.slice(1); // "/#profile" → "#profile"
        setIsActive(hash === expectedHash);
      } else if (path === "/") {
        // Solo marcar como activo si pathname === '/' y NO hay hash
        setIsActive(normalizedPath === "/" && hash === "");
      } else {
        setIsActive(normalizedPath === path);
      }
    };

    // Ejecutar en montaje
    updateActiveState();

    // Actualizar cuando cambia el hash (por navegación interna)
    window.addEventListener("hashchange", updateActiveState);

    // Limpieza
    return () => {
      window.removeEventListener("hashchange", updateActiveState);
    };
  }, [path]);

  return (
    <a
      href={`${base_url}${path}`}
      className={`${styles.menuLink} ${isActive ? styles.active : ""}`}
    >
      {label}
    </a>
  );
}