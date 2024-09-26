import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Structure/Layout";
import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos/Apropos";
import Logement from "./pages/Logement/Logement";
import Error from "./components/Error/Erreur";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Accueil />}/>
                    <Route path="/apropos" element={<Apropos />}/>
                    <Route path="/logement/:id" element={<Logement />}/>
                    <Route path="*" element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;