import styles from './ItemForm.module.css'

interface Props {
    label: string;
    placeholder: string;
    type: 'text' | 'email' | 'textarea' | 'phone';
    name: string;
    value: string;
    disabled: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export default function ItemForm(props: Props) {
    const { label, placeholder, type, name, value, onChange, disabled } = props

    return (
        <div className={styles.itemForm}>
            <label>{label}</label>
            {
                type === 'textarea' ?
                    <textarea
                        placeholder={placeholder}
                        name={name}
                        value={value || ''}
                        onChange={onChange}
                        disabled={disabled}
                    /> :
                    <input
                        type={type === 'email' ? 'email' : 'text'}
                        placeholder={placeholder}
                        name={name}
                        value={value || ''}
                        onChange={onChange}
                        disabled={disabled}
                    />
            }

        </div>
    )
}
