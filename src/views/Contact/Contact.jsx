import style from "./Contact.module.css";
import ContactHeader from "../../sections/ContactHeader/ContactHeader";
import ContactForm from "../../sections/ContactForm/ContactForm";
import ContactMap from "../../sections/ContactMap/ContactMap";
import Reviews from "../../sections/Reviews/Reviews";

export default function Contact() {
    return (
        <section className={style.container}>
            <ContactHeader />
            <ContactForm />
            <ContactMap />
            <Reviews />
        </section>
    );
}
