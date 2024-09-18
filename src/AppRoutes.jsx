import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Structure/Layout";
import Accueil from "./pages/Accueil/Accueil";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Accueil />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes