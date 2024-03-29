import style from "./ContactHeader.module.css";

export default function ContactHeader() {
    return (
        <div className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>Contato</div>
                <div className={style.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
        </div>
    );
}
