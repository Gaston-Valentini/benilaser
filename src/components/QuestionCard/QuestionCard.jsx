import style from "./QuestionCard.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export default function QuestionCard({ question, answer }) {
    const [active, setActive] = useState(false);

    const toggleAnswer = () => {
        setActive(!active);
    };

    return (
        <div className={style.container} onClick={toggleAnswer}>
            <div className={style.question}>
                <div className={`${style.questionText} ${active ? style.questionTextActive : ""}`}>{question}</div>
                <MdKeyboardArrowDown className={`${style.questionIcon} ${active ? style.questionIconActive : ""}`} />
            </div>
            <div className={`${style.answer} ${active ? style.answerActive : ""}`}>{answer}</div>
        </div>
    );
}
