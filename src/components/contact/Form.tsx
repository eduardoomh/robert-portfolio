import { toast, ToastContainer } from "react-toastify";
import ItemForm from "./ItemForm";
import { useState, type PropsWithChildren } from "react";
import { sendEmail, type EmailValuesI } from "../../services/EmailSend";

interface Props { }

export default function Form(props: PropsWithChildren<Props>) {
    const { children } = props;
    const [loading, setLoading] = useState(false);
    const [values, setvalues] = useState<EmailValuesI>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Validar correo electrónico
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validar teléfono (mínimo 10 dígitos ignorando símbolos)
    const isValidPhone = (phone: string): boolean => {
        const numericPhone = phone.replace(/\D/g, '');
        return numericPhone.length >= 10;
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validaciones
        if (!values.name || !values.email || !values.phone || !values.message) {
            toast.error("Please complete all the fields before submitting.", toastOptions);
            return;
        }

        if (values.name.trim().length < 3) {
            toast.error("Full name must be at least 3 characters long.", toastOptions);
            return;
        }

        if (!isValidEmail(values.email)) {
            toast.error("Please enter a valid email address.", toastOptions);
            return;
        }

        if (!isValidPhone(values.phone)) {
            toast.error("Please enter a valid phone number (at least 10 digits).", toastOptions);
            return;
        }

        if (values.message.trim().length < 3) {
            toast.error("Message must be at least 3 characters long.", toastOptions);
            return;
        }

        try {
            setLoading(true);

            const emailSended = await sendEmail(values);

            if(emailSended.code !== 200){
                setLoading(false);
                toast.error("Oops! An unexpected error happened. Try again later.", toastOptions)
            }
            console.log(emailSended);

            setLoading(false);
            setvalues({ name: '', email: '', phone: '', message: '' }); // limpiar formulario

            toast.success("Your message has been sent successfully.", toastOptions);
        } catch (err) {
            setLoading(false);
            toast.error("Oops! An unexpected error happened. Try again later.", toastOptions)
        }
    };

    const toastOptions = {
        position: "top-center" as const,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light"
    };

    return (
        <form onSubmit={onSubmit}>
            <ItemForm
                label="Full name"
                placeholder="Write your full name.."
                type="text"
                name="name"
                value={values.name}
                onChange={(e) => setvalues({ ...values, name: e.target.value })}
                disabled={loading}
            />
            <ItemForm
                label="Email"
                placeholder="Write your email.."
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => setvalues({ ...values, email: e.target.value })}
                disabled={loading}
            />
            <ItemForm
                label="Phone number"
                placeholder="Write your phone number.."
                type="phone"
                name="phone"
                value={values.phone}
                onChange={(e) => setvalues({ ...values, phone: e.target.value })}
                disabled={loading}
            />
            <ItemForm
                label="Message"
                placeholder="Write your message.."
                type="textarea"
                name="message"
                value={values.message}
                onChange={(e) => setvalues({ ...values, message: e.target.value })}
                disabled={loading}
            />
            {
                !loading ? (
                    <>
                        {children}
                    </>
                ) : (
                    <div style={{color: "white", fontSize: '1.5rem'}}>
                       <p>Cargando...</p>  
                    </div>
                   
                )
            }

            <ToastContainer {...toastOptions} />
        </form>
    );
};