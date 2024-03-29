import style from "./FrequentlyQuestionsHeader.module.css";

export default function FrequentlyQuestionsHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>Preguntas frecuentes</div>
                <div className={style.subtitle}>Conoce nuestra amplia gama de servicios</div>
            </div>
        </section>
    );
}
