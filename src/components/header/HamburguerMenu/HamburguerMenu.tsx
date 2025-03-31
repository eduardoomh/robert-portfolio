// components/HamburgerMenu.jsx
import { useState } from 'react';
import styles from './styles.module.css'
import SocialIcons from '../social-icons/SocialIcons';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.mobileMenu} onClick={toggleMenu}>
            {
                isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 13.6117L31.1117 0L35 3.88828L21.3883 17.5L35 31.1117L31.1117 35L17.5 21.3883L3.88828 35L0 31.1117L13.6117 17.5L0 3.88828L3.88828 0L17.5 13.6117Z" fill="white" />
                    </svg>


                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.5rem"
                        height="2.5rem"
                        viewBox="0 0 24 24"
                        className={styles.iconMobileMenu}
                    >
                        <path d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
                    </svg>
                )
            }
            <div className={isOpen ? `${styles.bottomSheet} ${styles.bottomSheetOpen}` : styles.bottomSheet}>
                <ul className={styles.menuOptions}>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
                <SocialIcons />
            </div>
        </div>
    );
}