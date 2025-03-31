import { useState } from 'react';
import styles from './styles.module.css'

interface Props{
    isDesktop?: boolean;
}

export default function CountryOption(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const { isDesktop } = props

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.mobileCountryIcon} onClick={toggleMenu}>
            <svg
                width={isDesktop ? "20" : "27"}
                height={isDesktop ? "20" : "27"}
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.3333 26.6667C5.96933 26.6667 0 20.6973 0 13.3333C0 5.96933 5.96933 0 13.3333 0C20.6973 0 26.6667 5.96933 26.6667 13.3333C26.6667 20.6973 20.6973 26.6667 13.3333 26.6667ZM21.8067 18.6027V18.4627C21.8067 17.2333 21.8067 16.672 20.9373 16.1747C20.6579 16.0163 20.3709 15.8716 20.0773 15.7413C19.588 15.5187 19.264 15.3733 18.8267 14.7333C18.7745 14.6573 18.7229 14.5809 18.672 14.504C18.212 13.804 17.88 13.3 16.616 13.5C14.1293 13.8947 13.9453 14.332 13.836 15.0707L13.8187 15.192C13.6573 16.272 13.628 16.6347 14.0787 17.108C15.7653 18.8773 16.776 20.1533 17.0827 20.9C17.232 21.264 17.616 22.3667 17.352 23.4573C18.9704 22.8127 20.411 21.79 21.5533 20.4747C21.7 19.976 21.8067 19.3547 21.8067 18.6027V18.6027ZM13.3333 2.444C10.244 2.444 7.45333 3.732 5.472 5.79867C5.708 5.96267 5.91333 6.19333 6.05467 6.51067C6.32667 7.12 6.32667 7.748 6.32667 8.304C6.32667 8.74133 6.32667 9.15733 6.46667 9.45733C6.65867 9.868 7.488 10.044 8.22 10.196C8.48267 10.252 8.752 10.308 8.99733 10.376C9.672 10.5627 10.1947 11.1693 10.612 11.656C10.7853 11.8573 11.0427 12.1547 11.172 12.2293C11.2387 12.1813 11.4533 11.948 11.5587 11.5653C11.6413 11.272 11.6173 11.0133 11.4987 10.872C10.752 9.992 10.7933 8.29867 11.024 7.67333C11.3867 6.688 12.52 6.76133 13.3493 6.81467C13.6587 6.83467 13.9493 6.85467 14.168 6.82667C14.9973 6.72267 15.2533 5.46 15.4333 5.21333C15.8227 4.68 17.0147 3.876 17.7533 3.38C16.362 2.76132 14.856 2.44241 13.3333 2.444V2.444Z"
                    fill="#F7F7F7"></path>
            </svg>
            <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isOpen ? `${styles.countryArrow} ${styles.countryArrowOpen}` : styles.countryArrow}
            >
                <path
                    d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"
                    fill="#F7F7F7"></path>
            </svg>
            <a href="https://robertriera.com/" target="_blank" rel="noopener noreferrer">
                <section className={isOpen ? `${styles.countryOptionBar} ${styles.showCountryBar}` : styles.countryOptionBar}>
                    <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_239_4516" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="24">
                            <rect x="0.314697" width="32" height="24" fill="white" />
                        </mask>
                        <g mask="url(#mask0_239_4516)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.314697 0V24H32.3147V0H0.314697Z" fill="#2E42A5" />
                            <mask id="mask1_239_4516" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.314697 0V24H32.3147V0H0.314697Z" fill="white" />
                            </mask>
                            <g mask="url(#mask1_239_4516)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.314697 0V12H32.3147V0H0.314697Z" fill="#FECA00" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.314697 18V24H32.3147V18H0.314697Z" fill="#E31D1C" />
                            </g>
                        </g>
                    </svg>
                    <p>Visit the spanish version </p>
                    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.9147 8.99998L0.314697 2.39998L2.20003 0.514648L10.6854 8.99998L2.20003 17.4853L0.314697 15.6L6.9147 8.99998Z" fill="#1C1B1B" />
                    </svg>
                </section>
            </a>
        </div>
    );
}