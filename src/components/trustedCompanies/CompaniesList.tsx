import { base_url } from '../../../utils/global';
import { companies } from '../../data/companies';
import styles from './CompaniesList.module.css'
interface Props {
    exclude?: string;
}

export default function CompaniesList(props: Props) {
    const intinityCompanies = [...companies, ...companies, ...companies]
    const { exclude = 'none' } = props

    return (
        <div className={styles.companiesList}>
            <div className={styles.sliderCompanies}>
                {
                    intinityCompanies
                        .filter(item => item.company !== exclude)
                        .map((item, index) => (
                            <article className={styles.companyItem} key={`${item.company}-${index}`}>
                                <a
                                    href={`${base_url}${item.link}`}
                                    ref={(el) => (el as HTMLAnchorElement | null)?.setAttribute('viewTransition', '')}
                                >
                                    <img
                                        src={`${base_url}${item.image}`}
                                        alt={item.company}
                                        width="287"
                                        height="157"
                                    />
                                    <h3 className={styles.companyItem_title}>{item.company}</h3>
                                </a>
                            </article>
                        ))
                }
            </div>
        </div>
    )
}