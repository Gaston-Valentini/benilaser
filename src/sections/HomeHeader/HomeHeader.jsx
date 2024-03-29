import style from "./HomeHeader.module.css";
import { Link } from "react-router-dom";

export default function HomeHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>Título del header</div>
                <div className={style.slogan}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <Link to="/treatments" className={style.button}>
                    TRATAMIENTOS
                </Link>
            </div>
        </section>
    );
}
