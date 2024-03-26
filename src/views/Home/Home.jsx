import style from "./Home.module.css";
import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";

export default function Home() {
    return (
        <section className={style.container}>
            <HomeHeader />
            <About />
        </section>
    );
}
