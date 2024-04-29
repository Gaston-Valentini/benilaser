import style from "./Procedure.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { GiLaserBlast } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export default function Procedure() {
    return (
        <section className={style.container}>
            <div className={style.title}>Paso a paso del tratamiento</div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <FaCalendarCheck className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>
                        <span>1º </span>Valoración y diagnóstico
                    </div>
                    <div className={style.cardsCardText}>Tu primera consulta con nosotros será informativa y totalmente gratuita, necesitaremos que nos envíes por WhatsApp una foto del tatuaje para que podamos valorarte.</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <FaEuroSign className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>
                        <span>2º </span>Presupuesto y primera consulta
                    </div>
                    <div className={style.cardsCardText}>Una vez hayamos estudiado el caso, te entregamos el presupuesto y te daremos una primera cita en clínica, el primer día podrás empezar con la eliminación del tatuaje.</div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <GiLaserBlast className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>
                        <span>3º </span>Proceso de eliminación
                    </div>
                    <div className={style.cardsCardText}>Los resultados definitivos de las sesiones serán visibles a partir de los 20 días. El pigmento desaparecerá gradualmente entre sesiones </div>
                </div>
                <FaLongArrowAltRight className={style.cardsArrow} />
                <div className={style.cardsCard}>
                    <MdHealthAndSafety className={style.cardsCardIcon} />
                    <div className={style.cardsCardTitle}>
                        <span>4º </span>Cuidados después de las sesiones
                    </div>
                    <div className={style.cardsCardText}>El cuidado de la piel es una parte fundamental del proceso, nosotros te entregaremos las pautas a seguir desde el primer día, estando en constante contacto para informarte y ayudarte en todo lo que necesites.</div>
                </div>
            </div>
        </section>
    );
}
