import style from "./Hook.module.css";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hook() {
    const onWhatsapp = () => {
        const phone = "+34640996689";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    return (
        <div className={style.container}>
            <div className={style.title}>Pide tu valoración gratuita</div>
            <div className={style.icon}>
                <hr />
                <FaRegCalendarCheck />
                <hr />
            </div>
            <div className={style.text}>
                La primera consulta con nosotros es totalmente <span>GRATUITA</span>.
                <br />
                <br />
                Además, puedes pedir tu valoración online vía WhatsApp, con uno de nuestros especialistas, en la que se hará un
                diagnóstico personalizado de tu caso, se te informará del funcionamiento del tratamiento, obtendrás tu presupuesto
                único y cantidad de sesiones aproximadas.
                <br />
                <br />
                Nuestros expertos te guiarán a través de todo el proceso. De principio a fin. Nuestro compromiso es proporcionarte
                el tratamiento óptimo para ti, y obtener los mejores resultados en el menor número de sesiones posible.
            </div>
            <div className={style.button} onClick={onWhatsapp}>
                VALORACIÓN GRATUITA
            </div>
        </div>
    );
}
