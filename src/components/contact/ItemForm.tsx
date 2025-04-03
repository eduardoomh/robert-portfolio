import styles from './ItemForm.module.css'

interface Props {
    label: string;
    placeholder: string;
    type: 'text' | 'email' | 'textarea' | 'phone';
}
export default function ItemForm(props: Props) {
    const { label, placeholder, type } = props

    return (
        <div className={styles.itemForm}>
            <label>{label}</label>
            {
                type === 'textarea' ? 
                <textarea placeholder={placeholder}/> : 
                <input type={type === 'email' ? 'email' : 'text'} placeholder={placeholder} />
            }
          
        </div>
    )
}
