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
            <div className={style.subtitle}>Te presentamos las etapas que componen el tratamiento, desde nuestro primer contacto hasta los cuidados necesarios luego de salir de la clínica y llegando al resultado final</div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <FaCalendarCheck className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Valoración y diagnóstico</div>
                    <div className={style.cardsCardText}>Tu primera consulta con nosotros será informativa y totalmente gratuita, necesitaremos que nos envíes por WhatsApp una foto del tatuaje para que podamos valorarte</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <FaEuroSign className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Presupuesto y primera consulta</div>
                    <div className={style.cardsCardText}>Una vez hayamos estudiado el caso, se te entregará el presupuesto y te daremos una primera cita en clínica, el primer día podrás empezar con la eliminación del tatuaje</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <GiLaserBlast className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Proceso de eliminación</div>
                    <div className={style.cardsCardText}>Los resultados de la primera sesión serán visibles a partir de 20 días, el pigmento irá desapareciendo gradualmente entre sesiones. Será necesario un tiempo prudente de recuperación para la siguiente sesión</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <MdHealthAndSafety className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>Cuidados después de las sesiones</div>
                    <div className={style.cardsCardText}>El cuidado de la piel es una parte fundamental del proceso, nosotros te entregaremos las pautas a seguir desde el primer día, estando en constante contacto para informarte y ayudarte en todo lo que necesites.</div>
                </div>
            </div>
        </section>
    );
}
