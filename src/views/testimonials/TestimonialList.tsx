import TestimonialItem from '../../components/testimonials/TestimonialItem';
import { testimonials } from '../../data/testimonials';
import styles from './TestimonialList.module.css';


export default function TestimonialList() {
  const intinityTestimonials = [...testimonials, ...testimonials]

  return (
    <div className={styles.testimonialSlider}>
      <div className={`${styles.testimonialContainer}`}>
        {
          intinityTestimonials.map((item, index) => (
            <TestimonialItem user={item.user} image={item.image} key={`${item.user}-${index + 1}`}>
              {item.text}
            </TestimonialItem>
          ))
        }
      </div>

    </div>
  );
}