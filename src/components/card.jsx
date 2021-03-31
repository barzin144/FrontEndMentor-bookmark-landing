import React from "react";

const Card = (props) => {
    const { image, title, description } = props;

    return (
        <div className="card">
            <div className="card__image">
                <img src={image} alt={title} />
            </div>
            <div className="card__text">
                <span className="card__text__title">
                    {title}
                </span>
                <span className="card__text__description">
                    {description}
                </span>
            </div>
            <div className="card__button">
                <a className="button blue-btn">Add & Install Extension</a>
            </div>
        </div>
    );
};

export default Card;