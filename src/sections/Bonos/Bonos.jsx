import style from "./Bonos.module.css";
import BonoCard from "../../components/BonoCard/BonoCard";
import { TbDiscountCheck } from "react-icons/tb";
import imageXS from "../../assets/images/xs.jpg";
import imageS from "../../assets/images/s.jpg";
import imageM from "../../assets/images/m.jpg";
import imageL from "../../assets/images/l.jpg";
import imageXL from "../../assets/images/xl.jpg";
import imageXXL from "../../assets/images/xxl.jpg";

export default function Bonos() {
    const cards = [
        {
            id: 1,
            image: imageXS,
            name: "XS",
            size: "2x2",
            area: "(±4cm²)",
            oldPrice: 39,
            price: 29,
            text: "Pieza de tamaño extra pequeño, generalmente elementos individuales de tamaño similar a una tarjeta SIM.",
            totalOldPrice: 195,
            totalPrice: 116,
        },
        {
            id: 2,
            image: imageS,
            name: "S",
            size: "2x4",
            area: "(±10cm²)",
            oldPrice: 49,
            price: 39,
            text: "Diseños de tamaño pequeño como como por ejemplo flores o nombres de tamaño similar al de una memoria USB.    ",
            totalOldPrice: 245,
            totalPrice: 156,
        },
        {
            id: 3,
            image: imageM,
            name: "M",
            size: "5x5",
            area: "(±25cm²)",
            oldPrice: 59,
            price: 49,
            text: "Pieza de tamaño mediano con varios elementos combinados entre si y con un volumen similar al de unos AirPods.",
            totalOldPrice: 295,
            totalPrice: 196,
        },
        {
            id: 4,
            image: imageL,
            name: "L",
            size: "5x10",
            area: "(±50cm²)",
            oldPrice: 69,
            price: 59,
            text: "Pieza de tamaño grande que suele tener varios elementos combinados y de tamaño similar al de una tarjeta de crédito.",
            totalOldPrice: 345,
            totalPrice: 236,
        },
        {
            id: 5,
            image: imageXL,
            name: "XL",
            size: "10x10",
            area: "(±100cm²)",
            oldPrice: 79,
            price: 69,
            text: "Tamaño extra grande, suelen incluir varios elementos detallados de tamaño similar a un smartphone o un palmo.",
            totalOldPrice: 395,
            totalPrice: 276,
        },
        {
            id: 6,
            image: imageXXL,
            name: "XXL",
            text: "Piezas de tamaño superior a 100 cm². Generalmente son diseños completos con muchos elementos combinados.",
        },
    ];

    return (
        <div className={style.container}>
            <div className={style.title}>Tarifas y precios</div>
            <div className={style.icon}>
                <hr />
                <TbDiscountCheck />
                <hr />
            </div>
            <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam, rerum modi qui in maiores porro quo voluptates! Autem illo eveniet reprehenderit porro quia. Quidem ea itaque amet in minus.</div>
            <div className={style.cards}>
                {cards.map((card) => (
                    <BonoCard key={card.id} image={card.image} name={card.name} size={card.size} area={card.area} oldPrice={card.oldPrice} price={card.price} text={card.text} totalOldPrice={card.totalOldPrice} totalPrice={card.totalPrice} />
                ))}
            </div>
        </div>
    );
}
