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
            <div className={style.title}>Escríbenos ahora</div>
            <div className={style.subtitle}>Rellena el formulario de contacto</div>
            <div className={style.data}>
                <form className={style.dataForm} onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="Nombre..." onChange={(e) => handleInput(e)} />
                    <input name="email" type="email" placeholder="Correo..." onChange={(e) => handleInput(e)} />
                    <PhoneInput
                        name="phone"
                        style={{ gap: "5px" }}
                        placeholder="Teléfono..."
                        onChange={(value) => setForm((prevState) => ({ ...prevState, phone: value || "" }))}
                    />
                    <textarea name="message" placeholder="Escribe tu mensaje..." onChange={(e) => handleInput(e)} />
                    <div className={style.dataFormTerms}>
                        <Switch
                            onChange={() => setTerms(!terms)}
                            checked={terms}
                            offColor="#d3d3d3"
                            onColor="#376296"
                            height={20}
                            width={40}
                            handleDiameter={18}
                            onHandleColor="#fff"
                        />
                        <div className={style.formTermsText}>
                            He leído y acepto los <Link to="/terms">Términos y Condiciones de Usuario</Link>
                        </div>
                    </div>
                    <input
                        className={style.dataFormSubmit}
                        type="submit"
                        value="Enviar"
                        disabled={!terms || Object.values(form).some((value) => value === "")}
                    />
                </form>
                <div className={style.values}></div>
            </div>
        </section>
    );
}
