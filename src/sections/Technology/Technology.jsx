import style from "./Technology.module.css";
import image from "../../assets/images/picosure.webp";

export default function Technology() {
    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataText}>
                    <div className={style.image}>
                        <img src={image} />
                    </div>
                    <div className={style.dataTitle}>PICOSURE</div>
                    El primer láser estético de picosegundos del mundo con una longitud de onda óptima para el tratamiento de las anomalías pigmentarias y la revitalización general de la piel, con la capacidad añadida de eliminar tatuajes.
                    <br />
                    <br />
                    El láser PicoSure de Cynosure permite aplicar tres longitudes de onda: 532 nm, 755 nm y 1064 nm, lo que lo hace ideal para el tratamiento de anomalías pigmentarias. Con la adición de la lente fraccionada Focus™, podrá tratar las afecciones de la piel más complicadas además de eliminar los tatuajes.
                    <br />
                    <br />
                    La lente fraccionada Focus de Cynosure genera reacciones fotomecánicas microscópicas en la epidermis que se transmiten a la dermis, lo que aumenta la cantidad de colágeno y elastina en la piel. Esta revolucionaria novedad, exclusiva de nuestro láser PicoSure, permite aplicar tratamientos de revitalización cutánea casi sin tiempo de inactividad.
                </div>
            </div>
        </section>
    );
}
