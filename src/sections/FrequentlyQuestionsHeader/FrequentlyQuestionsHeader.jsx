import style from "./FrequentlyQuestionsHeader.module.css";

export default function FrequentlyQuestionsHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>Preguntas frecuentes</div>
                <div className={style.subtitle}>Resolvemos cualquiera de tus dudas</div>
            </div>
        </section>
    );
}
