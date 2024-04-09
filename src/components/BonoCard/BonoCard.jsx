import style from "./BonoCard.module.css";

export default function BonoCard({ image, name, oldPrice, price, totalOldPrice, totalPrice }) {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={image} />
            </div>
            <div className={style.data}>
                <div className={style.name}>{name}</div>
                {name !== "XXL" ? (
                    <div className={style.price}>
                        <div className={style.priceOldPrice}>{oldPrice}€</div>
                        <div className={style.pricePrice}>{price}€</div>/ sesión
                    </div>
                ) : (
                    <div className={style.price}>Consultar</div>
                )}
                <hr />
                <div className={style.bono}>Bono 4 + 1 / {name}</div>
                {name !== "XXL" ? (
                    <div className={style.totalPrice}>
                        <div className={style.totalOldPrice}>{totalOldPrice}€</div>
                        <div className={style.totalPrice}>{totalPrice}€</div>
                    </div>
                ) : (
                    <div className={style.totalPrice}>Consultar</div>
                )}
                <div className={style.includes}>/ incluye 1 sesión GRATIS</div>
            </div>
        </div>
    );
}
