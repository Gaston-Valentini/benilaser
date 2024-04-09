import style from "./ContactHeader.module.css";

export default function ContactHeader() {
    return (
        <div className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>Contacto</div>
                <div className={style.subtitle}>Siempre disponibles para ti</div>
            </div>
        </div>
    );
}
