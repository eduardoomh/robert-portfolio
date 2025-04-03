

type iconType = 'regular' | 'CV' | 'send'

interface Props {
    iconType: iconType;
    className: string
}

const getIconType = (type: iconType, className: string) => {
    switch (type) {
        case 'CV':
            return <svg
                width="20"
                height="26"
                viewBox="0 0 25 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.5 21.3923V8.2H12.5C11.9477 8.2 11.5 7.70751 11.5 7.1V0.5H1.498C0.946999 0.5 0.5 1.0005 0.5 1.5912V21.4088C0.500552 22.0116 0.944971 22.5 1.493 22.5H17.507C17.7722 22.498 18.0258 22.3801 18.212 22.1724C18.3983 21.9646 18.5018 21.684 18.5 21.3923ZM13.5 6H18.5L13.5 0.503297V6Z"
                    fill="#F7F7F7"></path>
            </svg>
        case 'regular':
            return <svg 
                width="11" 
                height="19" 
                viewBox="0 0 11 19" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <path d="M7.00051 9.50001L0 2.4995L1.99974 0.499756L11 9.50001L1.99974 18.5003L0 16.5005L7.00051 9.50001Z" fill="#F7F7F7" />
            </svg>
        case 'send':
            return <svg 
                width="22" 
                height="18" 
                viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9508 1.39145L13.8857 23.7676C13.8131 23.8834 13.7067 23.9742 13.5808 24.0275C13.4549 24.0809 13.3157 24.0942 13.1819 24.0658C13.0482 24.0373 12.9265 23.9685 12.8332 23.8685C12.7399 23.7685 12.6796 23.6423 12.6605 23.5069L10.8975 11.0906L0.83327 2.56052C0.730778 2.4737 0.656902 2.35794 0.621324 2.22841C0.585745 2.09889 0.590123 1.96164 0.633883 1.83464C0.677644 1.70765 0.758747 1.59683 0.866563 1.51672C0.97438 1.43661 1.10388 1.39093 1.2381 1.38567L27.3617 0.369263C27.4831 0.364636 27.6034 0.393237 27.7096 0.451979C27.8159 0.510721 27.9041 0.597372 27.9647 0.702581C28.0254 0.807789 28.0561 0.927559 28.0537 1.04896C28.0512 1.17036 28.0156 1.28879 27.9508 1.39145Z" fill="#F7F7F7"/>
            </svg>
            


    }
}

export default function ButtonIcon(props: Props) {
    return (
        <>
            {
                getIconType(props.iconType, props.className)
            }
        </>
    )
}