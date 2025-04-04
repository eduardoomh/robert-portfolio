import type { PropsWithChildren } from "react";
import styles from './TestimonialItem.module.css'

interface Props {
    user: string;
    profile: string;
}
const TestimonialItem = (props: PropsWithChildren<Props>) => {
    const { user, profile, children } = props
    return (
        <article className={styles.testimonialCard}>
            <section className={styles.UserInfo}>
              <p>{profile}</p>  
              <div className={styles.profileData}>
                <h3>{user}</h3>
              </div>
              
            </section>
            <section>
                <p>{children}</p> 
            </section>
        </article>
    )
}

export default TestimonialItem