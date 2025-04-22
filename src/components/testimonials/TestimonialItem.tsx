import type { PropsWithChildren } from "react";
import styles from './TestimonialItem.module.css'
import { base_url } from "../../../utils/global";

interface Props {
    user: string;
    image: string;
}
const TestimonialItem = (props: PropsWithChildren<Props>) => {
    const { user, image, children } = props
    return (
        <article className={styles.testimonialCard}>
            <section className={styles.UserInfo}>
                <div className={styles.imgContainer}>
                    <img src={`${base_url}${image}`} width={60} height={60} alt={user} />
                </div>
                <div className={styles.profileData}>
                    <h3>{user}</h3>
                    <svg width="160" height="20" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 16.3626L13.8202 20L15.2002 12.6958L10 7.63958L17.0332 6.76248L20 0L22.9668 6.76248L30 7.63958L24.7998 12.6958L26.1798 20L20 16.3626Z" fill="#C0FF81" />
                        <path d="M50 16.3626L43.8202 20L45.2002 12.6958L40 7.63958L47.0332 6.76248L50 0L52.9668 6.76248L60 7.63958L54.7998 12.6958L56.1798 20L50 16.3626Z" fill="#C0FF81" />
                        <path d="M80 16.3626L73.8202 20L75.2002 12.6958L70 7.63958L77.0332 6.76248L80 0L82.9668 6.76248L90 7.63958L84.7998 12.6958L86.1798 20L80 16.3626Z" fill="#C0FF81" />
                        <path d="M110 16.3626L103.82 20L105.2 12.6958L100 7.63958L107.033 6.76248L110 0L112.967 6.76248L120 7.63958L114.8 12.6958L116.18 20L110 16.3626Z" fill="#C0FF81" />
                        <path d="M140 16.3626L133.82 20L135.2 12.6958L130 7.63958L137.033 6.76248L140 0L142.967 6.76248L150 7.63958L144.8 12.6958L146.18 20L140 16.3626Z" fill="#C0FF81" />
                    </svg>
                </div>
                <br/>
            </section>
            <div className={styles.dividerTestimonial}></div>
            <section>
                <p>{children}</p>
            </section>
        </article>
    )
}

export default TestimonialItem