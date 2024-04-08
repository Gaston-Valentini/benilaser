import style from "./About.module.css";
import image from "../../assets/images/about.jpg";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container} id="about">
            <div className={style.data}>
                <div className={style.dataImage}>
                    <img src={image} alt="profilePhoto" />
                </div>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoTitle}>Nuestra tecnología</div>
                    <div className={style.dataInfoBio}>
                        El revolucionario sistema láser, crea un rayo (l) de haz continuo, láser de conmutación Q, pulsos de rayo láser que duran mil millonésimas de segundo.
                        <br />
                        <br />
                        Esta tecnología es especializada en <span>eliminación de tatuajes y micropigmentos</span>, descomponiendo y fragmentando más rápidamente los pigmentos de la piel sin causar daños y en menos sesiones.
                        <br />
                        <br />
                        Contamos con tres longitudes de onda diferentes; 532nm 755nm y 1064nm.
                        <br />
                        <br />
                        Aplicamos técnicas innovadoras combinando las diferentes longitudes.
                        <br />
                        <br />
                        Nuestro láser tiene el poder de eliminar todas las lesiones pigmentadas comunes y un amplio espectro de colores del tatuaje, además, ofrece la posibilidad de tratamientos estéticos.
                    </div>
                    <div className={style.dataInfoButtons}>
                        <a href="https://www.instagram.com/benilaser_tattoo/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className={style.dataInfoButtonsButton} />
                        </a>
                        <a href="https://www.facebook.com/beni.laser/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className={style.dataInfoButtonsButton} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
