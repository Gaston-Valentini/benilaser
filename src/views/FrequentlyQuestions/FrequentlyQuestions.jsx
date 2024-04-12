import style from "./FrequentlyQuestions.module.css";
import Questions from "../../sections/Questions/Questions";
import FrequentlyQuestionsHeader from "../../sections/FrequentlyQuestionsHeader/FrequentlyQuestionsHeader";
import Reviews from "../../sections/Reviews/Reviews";

export default function FrequentlyQuestions() {
    return (
        <section className={style.container}>
            <FrequentlyQuestionsHeader />
            <Questions />
            <Reviews />
        </section>
    );
}
