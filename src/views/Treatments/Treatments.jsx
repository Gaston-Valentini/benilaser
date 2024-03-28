import style from "./Treatments.module.css";
import TreatmentsHeader from "../../sections/TreatmentsHeader/TreatmentsHeader";
import TreatmentCard from "../../components/TreatmentCard/TreatmentCard";
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
            description: "¿Tienes un tatuaje del que te gustaría deshacerte? Nuestro tratamiento de eliminación de tatuajes utiliza tecnología de vanguardia para desvanecer o eliminar completamente los tatuajes no deseados. Ya sea que estés buscando una eliminación total o una reducción significativa en la apariencia de tu tatuaje, estamos aquí para ayudarte.",
        },
        {
            id: 2,
            image: micropigmentation,
            title: "Micropigmentación",
            description: "La micropigmentación es una técnica innovadora que te permite resaltar y definir tus rasgos faciales de manera natural y duradera. Desde cejas perfectamente arqueadas hasta labios definidos y delineados, nuestro equipo de expertos en micropigmentación te ayudará a lograr el aspecto que deseas con resultados impecables.",
        },
        {
            id: 3,
            image: spots,
            title: "Manchas solares y de la edad",
            description: "Las manchas solares y de edad pueden afectar la apariencia de la piel, pero no tienes por qué vivir con ellas. Nuestros tratamientos especializados están diseñados para reducir la apariencia de manchas solares y de edad, dejando tu piel más uniforme, luminosa y rejuvenecida.",
        },
        {
            id: 4,
            image: radioterapy,
            title: "Manchas de radioterapia (GRATIS)",
            description: "Entendemos lo desafiante que puede ser lidiar con las marcas de radioterapia. Nuestros tratamientos están diseñados específicamente para ayudar a mejorar la apariencia de estas marcas, brindándote confort y confianza en tu piel.",
        },
    ];

    return (
        <section className={style.container}>
            <TreatmentsHeader />
            {treatments.map((card) => (
                <TreatmentCard key={card.id} id={card.id} image={card.image} title={card.title} description={card.description} />
            ))}
        </section>
    );
}
