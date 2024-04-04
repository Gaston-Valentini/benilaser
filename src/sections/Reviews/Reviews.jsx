import style from "./Reviews.module.css";
import image from "../../assets/images/logo-google-reviews.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    const getData = async () => {
        await fetch("http://localhost:2701/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data.data));
    };

    const settings = {
        dots: true,
        speed: 1000,
        arrows: false,
        fade: true,
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log(reviews);
    }, [reviews]);

    return (
        <section className={style.container}>
            <div className={style.title}>¿Que dicen nuestros clientes sobre nosotros?</div>
            <div className={style.subtitle}>Vuestras reseñas nos avalan</div>
            <a href="https://www.google.es/maps/place/Benilaser%C2%AE+TATTOO/@38.538054,-0.121879,17z/data=!3m2!4b1!5s0xd6204e86e02d8f7:0x67b314c58b24d59e!4m6!3m5!1s0xd620571e638fd05:0xbbc3c4e39759fe34!8m2!3d38.5380498!4d-0.1193041!16s%2Fg%2F11l6rvhcb7?entry=ttu" target="_blank" className={style.image}>
                <img src={image} />
            </a>
            <div className={style.reviews}>
                {reviews.length > 0 ? (
                    <Slider {...settings}>
                        {reviews.map((e) => (
                            <div key={e.time} className={style.reviewsReview}>
                                <div className={style.reviewsReviewAuthor}>
                                    <div className={style.reviewsReviewAuthorPhoto}>
                                        <img src={e.profile_photo_url} />
                                    </div>
                                    <div className={style.reviewsReviewAuthorName}>{e.author_name}</div>
                                </div>
                                <div className={style.reviewsReviewContent}>
                                    <div className={style.reviewsReviewContentText}>" {e.text} "</div>
                                    <div className={style.reviewsReviewContentRating}>
                                        {Array.from({ length: e.rating }, (_, index) => (
                                            <IoStarSharp key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className={style.reviewsVoid}>No hay reseñas disponibles para Benilaser.</p>
                )}
            </div>
        </section>
    );
}
