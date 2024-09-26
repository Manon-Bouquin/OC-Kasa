import React from "react";

function Host(props) {
    return (
        <div>
            <div>{props.host.name}</div>
            <img src={props.host.picture} alt="Portait du propiètaire"/>
        </div>
    );
};

export default Host;