import style from "./Contact.module.css";
import ContactHeader from "../../sections/ContactHeader/ContactHeader";
import ContactForm from "../../sections/ContactForm/ContactForm";

export default function Contact() {
    return (
        <section className={style.container}>
            <ContactHeader />
            <ContactForm />
        </section>
    );
}
