import React from "react";

function Host(props) {
    return (
        <div>
            <div className="host-name text-rose">{props.host.name}</div>
            <img className="host-portrait"src={props.host.picture} alt="Portait du propiètaire"/>
        </div>
    );
};

export default Host;