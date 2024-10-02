import React, { useState, useEffect } from "react";

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [shouldRender, setShouldRender] = useState(!isCollapsed); 
  
 // Utiliser un useEffect pour appliquer "display: none" après l'animation de fermeture
  useEffect(() => {
    if (!isCollapsed) {               // Si la section est ouverte, on affiche le contenu
        setShouldRender(true);
      } else {                          // Si la section est fermée, on attend la fin de l'animation avant de cacher
        setTimeout(() => {
          setShouldRender(false);
        }, 500);                        // Correspond à la durée de l'animation fadeOut (0.5s)
      }
    }, [isCollapsed]);
    const animation =
    (props.cssClasses !== undefined ? props.cssClasses : "") +
    " collapse" +
    (isCollapsed ? " collapsed" : "");

  return (
    <div className={animation}>
      <div className="collapse-title text-white">
        {props.titre}
        <div className={`button-chevron ${!isCollapsed ? "rotated" : ""}`} onClick={() => setIsCollapsed(!isCollapsed)}>
          <div className="fa-solid fa-chevron-up"></div>
        </div>
      </div>
      {shouldRender && (         //Affiche le contenu si shouldRender est vrai
        <div className={`collapse-content ${isCollapsed ? "hidden" : "visible"}`}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
