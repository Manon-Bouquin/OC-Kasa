import ImageAccueil from "../../assets/ImageAccueil.png"

const Banner = (props) => {
    return (
        <div className="banner text-white">
            <img src={ImageAccueil} alt="Falaise et Océan brumeux" />
            <div className="overlay"></div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner