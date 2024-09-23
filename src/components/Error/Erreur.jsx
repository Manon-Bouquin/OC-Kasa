import {Link} from "react-router-dom";

function Error () {
    return (
        <div className="error-container">
            <h1 className="error">404</h1>
            <p className="error-text">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
    );
}

export default Error ;