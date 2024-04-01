import style from "./Donations.module.css";

export default function Donations() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>En Benilaser nos unimos al apoyo contra el cáncer</div>
                <div className={style.text}>
                    Eliminamos gratuitamente las marcas derivadas del tratamiento con radioterapia.
                    <br />
                    <br />
                    Ayudamos a toda persona que haya pasado por este proceso, eliminando, de forma permanente, las molestas manchas o marcas de tinta
                    <br />
                    <br />
                    JUNTOS SOMOS MÁS FUERTES QUE CUALQUIER ENFERMEDAD
                </div>
            </div>
        </section>
    );
}
