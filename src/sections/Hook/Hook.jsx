import style from "./Hook.module.css";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hook() {
    return (
        <div className={style.container}>
            <div className={style.title}>Valoración gratuita</div>
            <div className={style.icon}>
                <hr />
                <FaRegCalendarCheck />
                <hr />
            </div>
            <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti laudantium, deserunt rem at excepturi, dignissimos tenetur labore magnam nihil assumenda dolore pariatur nemo velit aut tempora laborum fuga libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus quo enim, doloribus ullam fuga consequatur laborum! Iure ipsam consequuntur, a natus nobis excepturi quia delectus praesentium harum quo debitis.</div>
            <Link to="/contact" className={style.button}>
                CONTACTANOS
            </Link>
        </div>
    );
}
