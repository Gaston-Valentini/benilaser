import style from "./Donations.module.css";

export default function Donations() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title} style={{ textShadow: "0 0 20px white" }}>
                    EN BENILASER NOS UNIMOS AL APOYO CONTRA EL CÁNCER
                </div>
                <div className={style.text}>
                    Eliminamos gratuitamente las marcas derivadas del tratamiento con radioterapia.
                    <br />
                    <br />
                    Ayudamos a toda persona que haya pasado por este proceso, eliminando, de forma permanente, las molestas
                    manchas o marcas de tinta.
                    <br />
                    <br />
                    <span style={{ textDecoration: "underline", fontWeight: "800" }}>
                        ¡JUNTOS SOMOS MÁS FUERTES QUE CUALQUIER ENFERMEDAD!
                    </span>
                </div>
            </div>
        </section>
    );
}
