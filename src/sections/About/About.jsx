import style from "./About.module.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container} id="about">
            <div className={style.data}>
                <div className={style.dataImage}>
                    <img src="https://www.latevaweb.com/diseno-web/clinica-dental.jpg" alt="profilePhoto" />
                </div>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoTitle}>Nuestra tecnología</div>
                    <div className={style.dataInfoBio}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, aut distinctio quo ipsum itaque vel rerum ut ducimus sapiente esse quaerat ratione assumenda, excepturi libero vero culpa a repellat. Asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, aut distinctio quo ipsum itaque vel rerum ut ducimus sapiente esse quaerat ratione assumenda, excepturi libero vero culpa a repellat. Asperiores. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Repudiandae, aut distinctio quo ipsum itaque vel rerum ut ducimus sapiente esse quaerat ratione assumenda, excepturi libero vero culpa a repellat. Asperiores.
                    </div>
                    <div className={style.dataInfoButtons}>
                        <a href="https://github.com/Gaston-Valentini" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className={style.dataInfoButtonsButton} />
                        </a>
                        <a href="https://www.linkedin.com/in/gastonvalentini/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className={style.dataInfoButtonsButton} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
