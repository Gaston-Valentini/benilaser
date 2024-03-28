import style from "./Treatments.module.css";
import TreatmentsHeader from "../../sections/TreatmentsHeader/TreatmentsHeader";

export default function Treatments() {
    return (
        <section className={style.container}>
            <TreatmentsHeader />
        </section>
    );
}
