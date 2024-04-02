import style from "./Footer.module.css";
import logo from "../../assets/images/logo-gold.png";
import berkley from "../../assets/images/logo-berkley.png";
import ce from "../../assets/images/logo-ce.png";
import copiright from "../../assets/images/logo-copiright.png";
import iso9001 from "../../assets/images/logo-iso9001.png";
import picosure from "../../assets/images/logo-picosure.png";
import { Link } from "react-router-dom";
import { FaLocationDot, FaClock, FaPhone, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    const onWhatsapp = () => {
        const phone = "+34613798884";
        const message = "Hola";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataLogo}>
                    <img src={logo} />
                </div>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoText}>
                        <FaLocationDot />
                        Av. de Europa, 8, 32b, 03503 Benidorm, Alicante
                    </div>
                    <div className={style.dataInfoText}>
                        <FaClock />
                        8:00 - 16:00
                    </div>
                    <div className={style.dataInfoText}>
                        <FaPhone />
                        +34 623 271 806
                    </div>
                </div>
                <div className={style.dataSocial}>
                    <Link>
                        <FaInstagram />
                    </Link>
                    <Link>
                        <FaFacebookF />
                    </Link>
                    <FaWhatsapp onClick={onWhatsapp} />
                </div>
            </div>
            <hr />
            <div className={style.developer}>
                <div className={style.developerLink}>
                    Desarrollador - <a href="https://gaston-valentini.github.io/portfolio/">Gastón Valentini</a>
                </div>
                <div className={style.developerIcons}>
                    <div className={style.developerIconsImage}>
                        <img src={berkley} />
                    </div>
                    <div className={style.developerIconsImage}>
                        <img src={ce} />
                    </div>
                    <div className={style.developerIconsImage}>
                        <img src={copiright} />
                    </div>
                    <div className={style.developerIconsImage}>
                        <img src={iso9001} />
                    </div>
                    <div className={style.developerIconsImage}>
                        <img src={picosure} />
                    </div>
                </div>
            </div>
        </section>
    );
}
