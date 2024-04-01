import style from "./Treatments.module.css";
import TreatmentsHeader from "../../sections/TreatmentsHeader/TreatmentsHeader";
import TreatmentCard from "../../components/TreatmentCard/TreatmentCard";
import Procedure from "../../sections/Procedure/Procedure";
import Bonos from "../../sections/Bonos/Bonos";
import tattooRemove from "../../assets/images/tattoo-remove.jpg";
import micropigmentation from "../../assets/images/micropigmentation.webp";
import spots from "../../assets/images/spots.jpg";
import radioterapy from "../../assets/images/radioterapy.jpg";

export default function Treatments() {
    const treatments = [
        {
            id: 1,
            image: tattooRemove,
            title: "Eliminación de tatuajes",
            description: (
                <p>
                    Ofrecemos tratamientos seguros y efectivos de eliminación de tatuajes mediante tecnología láser. <span>Nuestro equipo profesional aplica técnicas innovadoras</span> combinando diferenteslongitudes de onda. El láser emite pulsos de luz que fragmentan las partículas de tinta, permitiendo que elsistema inmunológico las elimine de forma natural con el tiempo. A lo largo de varias sesiones, el láser irá rompiendo gradualmente la tinta, permitiendo que la piel sane entre cada
                    sesión. <span>Estudiamos cada caso y aplicamos el tratamiento más conveniente para cada paciente. Nuestro compromiso es proporcionarte el tratamiento óptimo para ti, y obtener losmejores resultados en el menor número de sesiones posible</span>. Nuestros expertos te guiarán a través de todo el proceso. De principio a fin
                </p>
            ),
        },
        {
            id: 2,
            image: micropigmentation,
            title: "Micropigmentación",
            description: (
                <p>
                    La <span>Micropigmentación</span> o <span>Microblading</span> en cejas y labios se ha vuelto cada vez más común en los últimos años. Si no estas contenta con los resultados obtenidos, o la micropigmentación se ha difuminado, <span>la eliminación con láser es la mejor opción</span>. El proceso de eliminación funciona de manera similar a la eliminación de tatuajes. <span>Ponte en manos de nuestros expertos y te guiaremos a través de todo el proceso</span>.
                </p>
            ),
        },
        {
            id: 3,
            image: spots,
            title: "Manchas solares y de la edad",
            description: <p>Las manchas solares y de edad pueden afectar la apariencia de la piel, pero no tienes por qué vivir con ellas. Nuestros tratamientos especializados están diseñados para reducir la apariencia de manchas solares y de edad, dejando tu piel más uniforme, luminosa y rejuvenecida.</p>,
        },
        {
            id: 4,
            image: radioterapy,
            title: "Manchas de radioterapia (GRATIS)",
            description: <p>Entendemos lo desafiante que puede ser lidiar con las marcas de radioterapia. Nuestros tratamientos están diseñados específicamente para ayudar a mejorar la apariencia de estas marcas, brindándote confort y confianza en tu piel.</p>,
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
