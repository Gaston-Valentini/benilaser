import style from "./Home.module.css";
import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";
import Hook from "../../sections/Hook/Hook";
import Procedure from "../../sections/Procedure/Procedure";
import Technology from "../../sections/Technology/Technology";
import Bonos from "../../sections/Bonos/Bonos";
import Donations from "../../sections/Donations/Donations";
import Questions from "../../sections/Questions/Questions";

export default function Home() {
    return (
        <section className={style.container}>
            <HomeHeader />
            <About />
            <Hook />
            <Procedure />
            <Technology />
            <Bonos />
            <Donations />
            <Questions />
        </section>
    );
}
