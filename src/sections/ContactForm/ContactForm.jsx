import style from "./ContactForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Switch from "react-switch";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        treatment: "",
        phone: "",
        message: "",
    });

    const [terms, setTerms] = useState(false);

    const handleInput = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataTitle}>Escríbenos ahora</div>
                <div className={style.dataSubtitle}>Rellena el formulario de contacto</div>
                <form className={style.dataForm} onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="Nombre..." onChange={(e) => handleInput(e)} />
                    <input name="email" type="email" placeholder="Correo..." onChange={(e) => handleInput(e)} />
                    <select name="treatment" onChange={(e) => handleInput(e)}>
                        <option disabled selected hidden>
                            Seleccione tratamiento
                        </option>
                        <option>Eliminación de tatuaje</option>
                        <option>Eliminación de micropigmentación</option>
                        <option>Eliminación de manchas solares</option>
                        <option>Eliminación de manchas de la edad</option>
                        <option>Eliminación de marcas de radioterapia</option>
                    </select>
                    <PhoneInput name="phone" style={{ gap: "5px" }} placeholder="Teléfono..." onChange={(value) => setForm((prevState) => ({ ...prevState, phone: value || "" }))} />
                    <textarea name="message" placeholder="Escribe tu mensaje..." onChange={(e) => handleInput(e)} />
                    <div className={style.dataFormTerms}>
                        <Switch onChange={() => setTerms(!terms)} checked={terms} offColor="#d3d3d3" onColor="#376296" height={20} width={40} handleDiameter={18} onHandleColor="#fff" />
                        <div className={style.formTermsText}>
                            He leído y acepto los <Link to="/terms">Términos y Condiciones de Usuario</Link>
                        </div>
                    </div>
                    <input className={style.dataFormSubmit} type="submit" value="Enviar" disabled={!terms || Object.values(form).some((value) => value === "")} />
                </form>
            </div>
            <div className={style.values}>
                <div className={style.valuesTitle}>NUESTROS VALORES NOS REPRESENTAN</div>
                <ul className={style.valuesList}>
                    <li className={style.valuesListItem}>ESTAMOS PRESENTES EN TODAS LAS ETAPAS DE NUESTROS SERVICIOS</li>
                    <li className={style.valuesListItem}>SOMOS APASIONADOS DE LA SALUD Y LA ESTÉTICA</li>
                    <li className={style.valuesListItem}>CUPLIMOS OBJETIVOS Y RESULTADOS</li>
                    <li className={style.valuesListItem}>CONTAMOS CON EQUIPO DE EXPERTOS CAPACITADOS Y PROFESIONALES</li>
                    <li className={style.valuesListItem}>GARANTIZAMOS LA MAYOR PRIVACIDAD Y SEGURIDAD</li>
                    <li className={style.valuesListItem}>TRABAJAMOS EN UN ESPACIO HIGIÉNICO Y TRANQUILO</li>
                </ul>
            </div>
        </section>
    );
}
