import React from "react";

function Tags (props) {
    return (
        <div>
            {props.tags.map((tag, index) => {
                return (
                    <span className="tags text-white" key={index}>{tag}</span>
                )
            })}
        </div>
    );
};

export default Tags;