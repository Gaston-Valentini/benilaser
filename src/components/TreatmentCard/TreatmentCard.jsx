import React from "react";
import style from "./TreatmentCard.module.css";

export default function TreatmentCard({ id, image, title, description }) {
    const isEven = id % 2 === 0;
    const containerClass = isEven ? `${style.container} ${style.containerPar}` : style.container;
    const contentClass = isEven ? `${style.content} ${style.contentPar}` : style.content;
    const dataTitleClass = isEven ? `${style.dataTitle} ${style.dataTitlePar}` : style.dataTitle;
    const dataDescriptionClass = isEven ? `${style.dataDescription} ${style.dataDescriptionPar}` : style.dataDescription;

    return (
        <div className={containerClass}>
            <div className={contentClass}>
                {isEven ? (
                    <>
                        <div className={style.data}>
                            <div className={dataTitleClass}>{title}</div>
                            <div className={dataDescriptionClass}>{description}</div>
                        </div>
                        <div className={style.image}>
                            <img src={image} alt={title} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={style.image}>
                            <img src={image} alt={title} />
                        </div>
                        <div className={style.data}>
                            <div className={dataTitleClass}>{title}</div>
                            <div className={dataDescriptionClass}>{description}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
