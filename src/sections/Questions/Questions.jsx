import style from "./Questions.module.css";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

export default function Questions() {
    const onWhatsapp = () => {
        const phone = "+34640996689";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    const questions = [
        {
            id: 1,
            question: "¿ES POSIBLE ELIMINAR UN TATUAJE POR COMPLETO?",
            answer: (
                <p>
                    Sí, en la gran mayoría de los casos y <span>gracias a la tecnología Láser Q-SWITCH Picosegundos, se pueden eliminar tatuajes de todos los colores</span>. En algunos casos concretos no se eliminan al 100%, pero el pigmento restante no es perceptible a simple vista.
                    <br />
                    <br />
                    Nuestro personal realizará un estudio personalizado para informarte de todos los factores que influyen; como el color, la profundidad de la tinta, localización y antigüedad del tatuaje.
                </p>
            ),
        },
        {
            id: 2,
            question: "¿CUÁNTAS SESIONES SON NECESARIAS PARA ELIMINAR EL TATUAJE?",
            answer: (
                <p>
                    <span>Para eliminar un tatuaje serán necesarias entre 6 y 10 sesiones aproximadamente</span>, aunque el resultado dependerá de varios factores principales como el tamaño, la cantidad de pigmento y el color. En la mayoría de los casos, en la 3ª o 4ª sesión la tinta superficial se ha eliminado y los resultados son muy buenos a primera vista.
                </p>
            ),
        },
        {
            id: 3,
            question: "HE EMPEZADO EL TRATAMIENTO EN OTRO CENTRO, ¿PUEDO CONTINUAR CON EL PROCESO EN BENILASER?",
            answer: <p>Sí, puedes continuar el proceso con nosotros, tu centro local de eliminación de tatuajes. Nuestro especialista te realizará una evaluación para poder garantizar el mejor resultado en la menor cantidad de sesiones posibles.</p>,
        },
        {
            id: 4,
            question: "¿QUEDARÁ ALGUNA MARCA O CICATRIZ EN LA ZONA? ",
            answer: (
                <p>
                    <span>Nuestra tecnología láser no dejará marcas siempre que sigas las recomendaciones y cuidados que te indicaremos</span>. Es importante que protejas la zona tratada del sol y te apliques la crema regeneradora recomendada por nuestro centro.
                </p>
            ),
        },
        {
            id: 5,
            question: "UNA VEZ ELIMINADO UNA PARTE O EL TOTAL DE MI TATUAJE, ¿PODRÉ VOLVER A TATUARME EN LA ZONA TRATADA?",
            answer: (
                <p>
                    <span>Si se puede volver a tatuar en la zona</span>. Tendrás que esperar el tiempo recomendado por nuestro especialista
                </p>
            ),
        },
        {
            id: 6,
            question: "¿SE PUEDE UTILIZAR CREMA ANESTÉSICA PARA LA SESIÓN?",
            answer: (
                <p>
                    <span>Utilizar crema anestésica si es una opción válida.</span> Minimiza el dolor causado por el láser (disminuye en poca medida el resultado de la sesión láser). No es recomendable cuando se necesita eliminar con rapidez.{" "}
                </p>
            ),
        },
    ];

    return (
        <section className={style.container}>
            <div className={style.text}>A continuación presentamos las preguntas más frecuentes de nuestros clientes</div>
            <div className={style.questions}>
                {questions.map((question) => (
                    <QuestionCard key={question.id} question={question.question} answer={question.answer} />
                ))}
            </div>
            <div className={style.contact} onClick={onWhatsapp}>
                ¿QUIERES CONSULTARNOS ALGO?
            </div>
        </section>
    );
}
