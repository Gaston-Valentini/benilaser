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
            <div className={style.title}>Nuestros clientes</div>
            <div className={style.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti eos rerum unde voluptatem, corrupti dolore mollitia voluptate et suscipit fugit, quisquam hic assumenda! Provident ut hic porro exercitationem sunt.</div>
            <div className={style.image}>
                <img src={image} />
            </div>
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
