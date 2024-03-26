import style from "./Navbar.module.css";
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
            <div className={style.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.png/2392px-Nissan_logo.png" alt="logo" />
            </div>
            <div className={style.bars}>
                <LiaBarsSolid className={style.barsIcon} onClick={onBars} />
            </div>
            <div className={`${style.links} ${isLinksActive ? style.linksActive : ""}`} ref={links}>
                <Link to="/" className={style.linksLink} onClick={onBars}>
                    INICIO
                </Link>
                <Link to="/services" className={style.linksLink} onClick={onBars}>
                    TRATAMIENTOS
                </Link>
                <Link to="/contact" className={style.linksLink} onClick={onBars}>
                    CONTACTO
                </Link>
            </div>
        </nav>
    );
}
