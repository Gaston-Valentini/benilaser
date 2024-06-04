import style from "./ContactMap.module.css";
import Map from "../../components/Map/Map";

export default function ContactMap() {
    return (
        <section className={style.container}>
            <Map />

            <div className={style.link}>
                <a
                    href="https://www.google.es/maps/place/Benilaser%C2%AE+TATTOO/@38.5380498,-0.121879,17z/data=!3m2!4b1!5s0xd6204e86e02d8f7:0x67b314c58b24d59e!4m6!3m5!1s0xd620571e638fd05:0xbbc3c4e39759fe34!8m2!3d38.5380498!4d-0.1193041!16s%2Fg%2F11l6rvhcb7?hl=es&entry=ttu"
                    target="_blank"
                >
                    Ver ruta
                </a>
            </div>
        </section>
    );
}
