import style from "./Whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
    const onWhatsapp = () => {
        const phone = "+34640996689";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    return (
        <section className={style.container}>
            <FaWhatsapp className={style.icon} onClick={onWhatsapp} />
        </section>
    );
}
