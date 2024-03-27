import style from "./Questions.module.css";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

export default function Questions() {
    const questions = [
        {
            id: 1,
            question: "¿ES POSIBLE ELIMINAR MI TATUAJE POR COMPLETO?",
            answer: (
                <p>
                    Totalmente. En la gran mayoría de los casos y gracias a nuestra <span>tecnología Láser Q-SWITCH Picosegundo de última generación</span>, se pueden eliminar tatuajes de todos los colores en un 85% y 90%. El tanto por ciento restante no es perceptible a simple vista.
                    <br />
                    <br />
                    Nuestro personal realizará una valoración preliminar para informarte de todos los factores que influyen en que tu tatuaje se pueda o no eliminar por completo. Factores como el color y la profundidad de la tinta, localización y antigüedad del tatuaje, etc.
                </p>
            ),
        },
        {
            id: 2,
            question: "¿ES POSIBLE ELIMINAR MI TATUAJE POR COMPLETO?",
            answer: (
                <p>
                    Totalmente. En la gran mayoría de los casos y gracias a nuestra <span>tecnología Láser Q-SWITCH Picosegundo de última generación</span>, se pueden eliminar tatuajes de todos los colores en un 85% y 90%. El tanto por ciento restante no es perceptible a simple vista.
                    <br />
                    <br />
                    Nuestro personal realizará una valoración preliminar para informarte de todos los factores que influyen en que tu tatuaje se pueda o no eliminar por completo. Factores como el color y la profundidad de la tinta, localización y antigüedad del tatuaje, etc.
                </p>
            ),
        },
        {
            id: 3,
            question: "¿ES POSIBLE ELIMINAR MI TATUAJE POR COMPLETO?",
            answer: (
                <p>
                    Totalmente. En la gran mayoría de los casos y gracias a nuestra <span>tecnología Láser Q-SWITCH Picosegundo de última generación</span>, se pueden eliminar tatuajes de todos los colores en un 85% y 90%. El tanto por ciento restante no es perceptible a simple vista.
                    <br />
                    <br />
                    Nuestro personal realizará una valoración preliminar para informarte de todos los factores que influyen en que tu tatuaje se pueda o no eliminar por completo. Factores como el color y la profundidad de la tinta, localización y antigüedad del tatuaje, etc.
                </p>
            ),
        },
    ];

    return (
        <section className={style.container}>
            <div className={style.title}>Preguntas frecuentes</div>
            <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ex, adipisci ipsa incidunt itaque dolorum deserunt quisquam earum. Voluptatibus libero excepturi facere sunt exercitationem repellendus eos rerum? Explicabo, maxime ab.</div>
            <div className={style.questions}>
                {questions.map((question) => (
                    <QuestionCard key={question.id} question={question.question} answer={question.answer} />
                ))}
            </div>
        </section>
    );
}
