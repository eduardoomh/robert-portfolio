import { useState, useEffect } from "react";
import styles from './styles.module.css'
import { base_url } from '../../../../utils/global';

interface MenuLinkProps {
  path: string;
  label: string;
}

export default function MenuLink({ path, label }: MenuLinkProps) {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    console.log("path", window.location)
  }, []);

  const isActive = `${currentPath}` === path;

  return (
    <li>
      <a href={`${base_url}${path}`} className={`${styles.menuLink} ${isActive ?  `${styles.active}` : ""}`}>
        {label}
      </a>
    </li>
  );
}