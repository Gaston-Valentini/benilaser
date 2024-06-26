import style from "./Treatments.module.css";
import TreatmentsHeader from "../../sections/TreatmentsHeader/TreatmentsHeader";
import TreatmentCard from "../../components/TreatmentCard/TreatmentCard";
import Procedure from "../../sections/Procedure/Procedure";
import Bonos from "../../sections/Bonos/Bonos";
import tattooRemove from "../../assets/images/tattoo-remove.jpg";
import microblading from "../../assets/images/microblading.jpg";
import micropigmentation from "../../assets/images/micropigmentation.jpg";

export default function Treatments() {
    const treatments = [
        {
            id: 1,
            image: tattooRemove,
            title: "Eliminación de tatuajes",
            description: (
                <p>
                    Ofrecemos tratamientos seguros y efectivos de eliminación de tatuajes mediante tecnología láser. <span>Nuestro equipo profesional aplica técnicas innovadoras</span> combinando diferentes longitudes de onda.
                    <br />
                    <br />
                    El láser emite pulsos de luz que fragmentan las partículas de tinta, permitiendo que el sistema linfático las elimine de forma natural con el tiempo.
                    <br />
                    <br />
                    A lo largo de varias sesiones, el láser irá rompiendo gradualmente la tinta, permitiendo que la piel sane entre cada sesión.
                    <br />
                    <br />
                    <span>
                        Estudiamos cada caso y aplicamos el tratamiento más conveniente para cada paciente. Nuestro compromiso es proporcionarte el tratamiento óptimo para ti, y obtener los mejores resultados en el menor número de sesiones posible.
                        <br />
                        <br />
                    </span>
                    Nuestros expertos te guiarán a través de todo el proceso. De principio a fin.
                </p>
            ),
        },
        {
            id: 2,
            image: micropigmentation,
            title: "Eliminación de micropigmentación capilar o facial",
            description: (
                <p>
                    El tratamiento de micropigmentación capilar se ha vuelto común entre hombres, en la mayoría de casos la tinta se ha difuminado o borrado, las zonas tatuadas no son simétricas o no estás satisfecho con los resultados obtenidos.
                    <br />
                    <br />
                    <span>La mejor opción para eliminar una micropigmentación capilar es nuestra tecnología láser Q-Switched</span> que no deja marcas ni cicatrices.
                    <br />
                    <br />
                    En este caso las sesiones necesarias para la eliminación completa son menos que cualquier otro tratamiento debido a la cantidad de pigmento depositada en el cuero cabelludo.
                </p>
            ),
        },
        {
            id: 3,
            image: microblading,
            title: "Eliminación de microblading",
            description: (
                <p>
                    La <span>Micropigmentación</span> o <span>Microblading</span> en cejas y labios se ha vuelto cada vez más común en los últimos años. Si no estas contenta con los resultados obtenidos, o la micropigmentación se ha difuminado, <span>la eliminación con láser es la mejor opción</span>.
                    <br />
                    <br />
                    El proceso de eliminación funciona de manera similar a la eliminación de tatuajes.
                    <br />
                    <br />
                    <span>Ponte en manos de nuestros expertos y te guiaremos a través de todo el proceso</span>.
                </p>
            ),
        },
    ];

    return (
        <section className={style.container}>
            <TreatmentsHeader />
            {treatments.map((card) => (
                <TreatmentCard key={card.id} id={card.id} image={card.image} title={card.title} description={card.description} />
            ))}
            <Procedure />
            <Bonos />
        </section>
    );
}
