import Banner from "../../components/Structure/Banner";
import ImageAccueil from "../../assets/ImageAccueil.png";
import logementsList from "../../datas/logementsList.json";
import Card from "../../components/Cards/Card";

const Accueil = () => {
    return (
        <>
        <div className="bannerContainer">
            <Banner bgImage={ImageAccueil} alt="Falaise et Océan brumeux">Chez vous, partout et ailleurs</Banner>
        </div>
        <div className="cardContainer">
            <div className="cardsList">
                {
                    logementsList.map( (logementsList) => <Card key={logementsList.id} id={logementsList.id} title={logementsList.title} cover={logementsList.cover} />)
                }
            </div>
        </div>
        </>
    );
};

export default Accueil;