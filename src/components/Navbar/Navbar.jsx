import style from "./Navbar.module.css";
import logo from "../../assets/images/logo-black.png";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function Navbar() {
    const [isLinksActive, setIsLinksActive] = useState(false);
    const links = useRef(null);

    const onBars = () => {
        setIsLinksActive(!isLinksActive);
    };

    return (
        <nav className={style.container}>
            <Link to="/" className={style.logo}>
                <img src={logo} alt="logo" />
            </Link>
            <div className={style.bars}>
                <LiaBarsSolid className={style.barsIcon} onClick={onBars} />
            </div>
            <div className={`${style.links} ${isLinksActive ? style.linksActive : ""}`} ref={links}>
                <Link to="/" className={style.linksLink} onClick={onBars}>
                    Inicio
                </Link>
                <Link to="/treatments" className={style.linksLink} onClick={onBars}>
                    Tratamientos
                </Link>
                <Link to="/frequently-questions" className={style.linksLink} onClick={onBars}>
                    Preguntas frecuentes
                </Link>
                <Link to="/contact" className={style.linksLink} onClick={onBars}>
                    Contacto
                </Link>
            </div>
        </nav>
    );
}
