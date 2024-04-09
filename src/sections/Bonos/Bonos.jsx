import style from "./Bonos.module.css";
import BonoCard from "../../components/BonoCard/BonoCard";
import { TbDiscountCheck } from "react-icons/tb";
import imageXS from "../../assets/images/xs.jpg";
import imageS from "../../assets/images/s.jpg";
import imageM from "../../assets/images/m.jpg";
import imageL from "../../assets/images/l.jpg";
import imageXL from "../../assets/images/xl.jpg";
import imageXXL from "../../assets/images/xxl.jpg";
import microblading from "../../assets/images/microblading.jpg";

export default function Bonos() {
    const cards = [
        {
            id: 1,
            image: imageXS,
            name: "XS",
            oldPrice: 45,
            price: 35,
            totalOldPrice: 225,
            totalPrice: 140,
        },
        {
            id: 2,
            image: imageS,
            name: "S",
            oldPrice: 60,
            price: 50,
            totalOldPrice: 300,
            totalPrice: 200,
        },
        {
            id: 3,
            image: imageM,
            name: "M",
            oldPrice: 75,
            price: 65,
            totalOldPrice: 375,
            totalPrice: 260,
        },
        {
            id: 4,
            image: imageL,
            name: "L",
            oldPrice: 90,
            price: 80,
            totalOldPrice: 450,
            totalPrice: 320,
        },
        {
            id: 5,
            image: imageXL,
            name: "XL",
            oldPrice: 105,
            price: 95,
            totalOldPrice: 525,
            totalPrice: 380,
        },
        {
            id: 6,
            image: imageXXL,
            name: "XXL",
        },
        {
            id: 7,
            image: microblading,
            name: "Microblading",
            oldPrice: 75,
            price: 65,
            totalOldPrice: 375,
            totalPrice: 260,
        },
    ];

    return (
        <div className={style.container}>
            <div className={style.title}>Tarifas para eliminación de tatuajes</div>
            <div className={style.icon}>
                <hr />
                <TbDiscountCheck />
                <hr />
            </div>
            <div className={style.text}>
                Te ofrecemos precios flexibles y bonos. El precio de tu sesión lo calcularemos midiendo con nuestras plantillas el
                tamaño de tatuaje. Hemos creado un amplio abanico de precios para ajustarnos a tus necesidades. PROMOCIÓN 4+1
                GRATIS
            </div>
            <div className={style.cards}>
                {cards.map((card) => (
                    <BonoCard
                        key={card.id}
                        image={card.image}
                        name={card.name}
                        oldPrice={card.oldPrice}
                        price={card.price}
                        text={card.text}
                        totalOldPrice={card.totalOldPrice}
                        totalPrice={card.totalPrice}
                    />
                ))}
            </div>
        </div>
    );
}
