import style from "./Footer.module.css";
import logo from "../../assets/images/logo-black.png";
import berkley from "../../assets/images/logo-berkley.png";
import ce from "../../assets/images/logo-ce.png";
import copiright from "../../assets/images/logo-copiright.png";
import iso9001 from "../../assets/images/logo-iso9001.png";
import picosure from "../../assets/images/logo-picosure.png";
import { Link } from "react-router-dom";
import { FaLocationDot, FaClock, FaPhone, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaQuestion, FaWpforms } from "react-icons/fa";
import { GiLaserBlast } from "react-icons/gi";

export default function Footer() {
    const onWhatsapp = () => {
        const phone = "+34613798884";
        const message = "Hola";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.images}>
                    <div className={style.imagesLogo}>
                        <img src={logo} />
                    </div>
                    <div className={style.imagesLogo}>
                        <img src={berkley} />
                    </div>
                    <div className={style.imagesLogo}>
                        <img src={picosure} />
                    </div>
                    <div className={style.imagesLogo}>
                        <img src={copiright} />
                    </div>
                    <div className={style.imagesLogo}>
                        <img src={iso9001} />
                    </div>
                    <div className={style.imagesLogo}>
                        <img src={ce} />
                    </div>
                </div>
                <div className={style.data}>
                    <div className={style.dataSection}>
                        <FaLocationDot />
                        <div className={style.dataSectionText}>Avenida de Europa 8, Bajo - local 32b, 03503 Benidorm, Alicante</div>
                    </div>
                    <div className={style.dataSection}>
                        <FaClock />
                        <div className={style.dataSectionText}>10:00 - 19:00</div>
                    </div>
                    <div className={style.dataSection}>
                        <FaPhone />
                        <div className={style.dataSectionText}>+34 640 99 66 89</div>
                    </div>
                    <div className={style.dataSection}>
                        <MdEmail />
                        <div className={style.dataSectionText}>benilasertattoo@gmail.com</div>
                    </div>
                </div>
                <div className={style.social}>
                    <div className={style.socialSection}>
                        <div className={style.socialSectionText}>Nuestras redes</div>
                        <div className={style.socialSectionIcons}>
                            <div className={style.socialSectionIconsSection}>
                                <a href="https://www.instagram.com/benilaser_tattoo/" target="_blank" rel="noopener noreferrer" className={style.socialSectionIconsSectionIcon}>
                                    <FaInstagram />
                                </a>
                                <div className={style.socialSectionIconsSectionName}>Instagram</div>
                            </div>
                            <div className={style.socialSectionIconsSection}>
                                <a href="https://www.facebook.com/beni.laser/" target="_blank" rel="noopener noreferrer" className={style.socialSectionIconsSectionIcon}>
                                    <FaFacebookF />
                                </a>
                                <div className={style.socialSectionIconsSectionName}>Facebook</div>
                            </div>
                            <div className={style.socialSectionIconsSection}>
                                <div className={style.socialSectionIconsSectionIcon} onClick={onWhatsapp}>
                                    <FaWhatsapp />
                                </div>
                                <div className={style.socialSectionIconsSectionName}>Whatsapp</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.socialSection}>
                        <div className={style.socialSectionText}>Navegación</div>
                        <div className={style.socialSectionIcons}>
                            <div className={style.socialSectionIconsSection}>
                                <Link to="/treatments" className={style.socialSectionIconsSectionIcon} onClick={() => window.scrollTo(0, 0)}>
                                    <GiLaserBlast />
                                </Link>
                                <div className={style.socialSectionIconsSectionName}>Tratamientos</div>
                            </div>
                            <div className={style.socialSectionIconsSection}>
                                <Link to="frequently-questions" className={style.socialSectionIconsSectionIcon} onClick={() => window.scrollTo(0, 0)}>
                                    <FaQuestion />
                                </Link>
                                <div className={style.socialSectionIconsSectionName}>Preguntas frecuentes</div>
                            </div>
                            <div className={style.socialSectionIconsSection}>
                                <Link to="/contact" className={style.socialSectionIconsSectionIcon} onClick={() => window.scrollTo(0, 0)}>
                                    <FaWpforms />
                                </Link>
                                <div className={style.socialSectionIconsSectionName}>Contacto</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={style.developer}>
                Desarrollado por -{" "}
                <a href="https://www.linkedin.com/in/gastonvalentini/" target="_blank">
                    {" "}
                    Gastón Valentini{" "}
                </a>
            </div>
        </section>
    );
}
