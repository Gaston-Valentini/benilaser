import style from "./Contact.module.css";
import ContactHeader from "../../sections/ContactHeader/ContactHeader";

export default function Contact() {
    return (
        <section className={style.container}>
            <ContactHeader />
        </section>
    );
}
