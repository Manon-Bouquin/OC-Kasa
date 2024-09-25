import React, { useState } from "react";

function Collapse(props) {
  //Déclare un état "isCollapsed", initialisé à true (la section est fermé)
  //setIsCollapsed est la fct utilisée pour mettre à jour l'état.
  //Lorsqu'elle est appelé, elle bascule entre true (fermé) et false (ouvert)
  const [isCollapsed, setIsCollapsed] = useState(true);
  const animation =
  (props.cssClasses !== undefined ? props.cssClasses : "") +
  " collapse" +
  (isCollapsed ? " collapsed" : "")
  
  return (
    <div className={animation}> 
      <div className="collapse-title text-white">
        {props.titre}
        <div className="button-chevron" onClick={() => setIsCollapsed(!isCollapsed)}>
          <div className="fa-solid fa-chevron-up"></div>
        </div>
      </div>
      {!isCollapsed && (
        <div className="collapse-content">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Collapse;