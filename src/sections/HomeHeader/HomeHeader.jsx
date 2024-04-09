import style from "./HomeHeader.module.css";
import { Link } from "react-router-dom";

export default function HomeHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>EXPERTOS EN ELIMINACIÓN DE TATUAJES Y MICROPIGMENTOS</div>
                <div className={style.subtitle}>+ DE 200 TATUAJES EN TRATAMIENTO</div>
                <div className={style.slogan}>
                    Nuestro compromiso es proporcionarte el tratamiento óptimo para ti y obtener los mejores resultados en la
                    menor cantidad de tiempo posible.
                </div>
                <Link to="/treatments" className={style.button}>
                    DESCUBRE NUESTROS SERVICIOS
                </Link>
            </div>
        </section>
    );
}
