import ItemForm from "./ItemForm";

interface Props {

}

export default function Form(props: Props) {

    return (
        <form>
            <ItemForm label="Full name" placeholder="Write your full name.." type="text" />
            <ItemForm label="Email" placeholder="Write your email.." type="email" />
            <ItemForm label="Phone number" placeholder="Write your phone number.." type="phone" />
            <ItemForm label="Message" placeholder="Write your message.." type="textarea" />
        </form>
    )
}
