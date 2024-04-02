import style from "./ContactMap.module.css";
import Map from "../../components/Map/Map";

export default function ContactMap() {
    return (
        <section className={style.container}>
            <Map />
        </section>
    );
}
