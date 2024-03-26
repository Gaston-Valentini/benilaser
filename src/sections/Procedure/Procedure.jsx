import style from "./Procedure.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { GiLaserBlast } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export default function Procedure() {
    return (
        <section className={style.container}>
            <div className={style.title}>El procedimiento</div>
            <div className={style.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum, veniam quia corporis et, unde veritatis, consequuntur ea quibusdam explicabo enim aut atque consequatur nisi laboriosam. Facilis iure reiciendis aliquid.</div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <FaCalendarCheck className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Consulta inicial</div>
                    <div className={style.cardsCardText}>Tu primera visita con nosotros será una consulta informativa y totalmente gratuita, pudiendo comenzar el proceso de eliminación en esta primera cita</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <FaEuroSign className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Presupuesto</div>
                    <div className={style.cardsCardText}>Según el tamaño de tu tatuaje calcularemos el precio por sesión, siempre ofreciendo precios flexibles y bonos asequibles</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <GiLaserBlast className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Proceso de eliminación</div>
                    <div className={style.cardsCardText}>El proceso de eliminación requiere de 3 a 5 sesiones para difuminar y de 6 a 8 sesiones aproximadamente para una eliminación completa</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <MdHealthAndSafety className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Cuidado posterior</div>
                    <div className={style.cardsCardText}>El cuidado de la piel es una parte fundamental del proceso y forma parte del tratamiento. Con nuestro método de curación y cuidados te garantizamos los mejores resultados con un menor número de sesiones</div>
                </div>
            </div>
        </section>
    );
}
