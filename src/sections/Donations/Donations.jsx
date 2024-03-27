import style from "./Donations.module.css";

export default function Donations() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.title}>Hacemos donaciones</div>
                <div className={style.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum minima soluta quisquam recusandae excepturi corrupti ullam! Non, exercitationem odit cupiditate iusto neque voluptatibus rerum. Vero non enim illum voluptatibus ad?</div>
            </div>
        </section>
    );
}
