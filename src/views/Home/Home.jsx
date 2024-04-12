import style from "./Home.module.css";
import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";
import Hook from "../../sections/Hook/Hook";
import Reviews from "../../sections/Reviews/Reviews";
import Donations from "../../sections/Donations/Donations";

export default function Home() {
    return (
        <section className={style.container}>
            <HomeHeader />
            <About />
            <Donations />
            <Reviews />
            <Hook />
        </section>
    );
}
