import React from "react";

function Rating(props) {
    return (
        <div className="starLogement">
            {Array.from(Array(5), (e, index) => {
                const star =
                index < props.rating
                    ? "fa-star-active text-primary"
                    : "fa-star-inactive"
                const starClasses = `fa-solid fa-star ${star}`
                return <i key={index} className={starClasses}></i>
            })}
        </div>
    );
};

export default Rating;