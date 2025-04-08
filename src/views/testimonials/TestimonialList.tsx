import TestimonialItem from '../../components/testimonials/TestimonialItem';
import styles from './TestimonialList.module.css';

const testimonials = [
  {
    user: "Brian Bitter - SEO en Scaleup Agency",
    image: "/images/testimonials/brian-bitter.png",
    text: "Working with Robert was an exceptional experience. His creativity and expertise in digital marketing were crucial to the success of our business. His dedication and skills helped us effectively achieve our growth objectives. Robert’s strategic guidance and proactive approach were invaluable in driving our success."
  },
  {
    user: "Jean Posso - Marketing Assistant in Web360",
    image: "/images/testimonials/jean-posso.png",
    text: "Me complace expresar mi agradecimiento por su excelente labor como gerente de marketing digital en nuestra empresa. Desde que se unió al equipo, ha sido un líder inspirador que ha demostrado una gran capacidad para guiar y motivar al equipo hacia el éxito."
  },
  {
    user: "Eduardo Villasmil - CEO in ColNetwork",
    image: "/images/testimonials/eduardo-villasmil.png",
    text: "I want to express my sincere gratitude for the excellent work you have done in our company. Your dedication and effort have been fundamental in achieving the results we were looking for. Thanks to your performance, we have been able to increase our online presence, reach a broader audience, and acquire more customers."
  },
  {
    user: "Juan Molina - Marketing Assistant in Web360",
    image: "/images/testimonials/juan-molina.png",
    text: "His work as a digital marketer has been crucial to the growth and success of the company we work for. His ability to innovate and adapt to changes in the market has been impressive, and it has been a pleasure working with him in this field. Thank you for your excellent work!"
  },
  {
    user: "Jeinner Sanchez - CEO in Movii Agencia",
    image: "/images/testimonials/jeinner-sanchez.png",
    text: "His dedication and commitment to the success of the company have been remarkable, working diligently to meet objectives and exceed expectations."
  },
  {
    user: "Azael Ayala - CEO in Drenvio",
    image: "/images/testimonials/azael-ayala.png",
    text: "Since joining the team, he has demonstrated a great ability to develop and execute effective digital marketing strategies. His creativity and technical skills have been key in carrying out successful campaigns across different platforms, including social media, email, and online advertising."
  }
];

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