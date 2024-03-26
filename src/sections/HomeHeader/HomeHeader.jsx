import style from "./HomeHeader.module.css";
import video from "../../assets/videos/home-header.mp4";

export default function HomeHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <video autoPlay muted loop className={style.video}>
                    <source src={video} type="video/mp4" />
                </video>
                <div className={style.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.png/2392px-Nissan_logo.png" />
                </div>
                <div className={style.slogan}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
        </section>
    );
}
