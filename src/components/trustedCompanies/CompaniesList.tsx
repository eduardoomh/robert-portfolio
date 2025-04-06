import styles from './CompaniesList.module.css'

const companies = [
    {
        company: "Drenvio",
        image: "/images/companies/drenvio-company-mobile.png",
        link: '/companies/drenvio'
    },
    {
        company: "Web360 Agencia Digital",
        image: "/images/companies/web360-agencia-digital.png",
        link: '/companies/web360'
    },
    {
        company: "GOAIRHEADS",
        image: "/images/companies/goairheads.png",
        link: '/companies/goairheads'
    },
    {
        company: "IP Architechs",
        image: "/images/companies/iparchitechs.png",
        link: '/companies/iparchitechs'
    },
    {
        company: "Inconexo Shop",
        image: "/images/companies/inconexoshop.png",
        link: '/companies/inconexoshop'
    },
    {
        company: "Movii Agencia",
        image: "/images/companies/movii-agencia.png",
        link: '/companies/movii-agencia'
    },
    {
        company: "Vida Natural +",
        image: "/images/companies/vida-natural-plus.png",
        link: '/companies/vida-natural-plus'
    },
    {
        company: "All Inchess",
        image: "/images/companies/all-inchess.png",
        link: '/companies/all-inchess'
    },
];

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
                                    href={item.link}
                                    ref={(el) => (el as HTMLAnchorElement | null)?.setAttribute('viewTransition', '')}
                                >
                                    <img
                                        src={item.image}
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