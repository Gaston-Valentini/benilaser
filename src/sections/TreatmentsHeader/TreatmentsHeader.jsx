import style from "./TreatmentsHeader.module.css";

export default function TreatmentsHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>Tratamientos</div>
                <div className={style.subtitle}>Conoce nuestros servicios</div>
            </div>
        </section>
    );
}
