import style from "./HomeHeader.module.css";
import video from "../../assets/videos/home-header.mp4";
import logo from "../../assets/images/logo-white.png";

export default function HomeHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <video autoPlay muted loop className={style.video}>
                    <source src={video} type="video/mp4" />
                </video>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <div className={style.slogan}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
        </section>
    );
}
