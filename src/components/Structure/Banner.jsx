function Banner(props) {
    return (
        <div className="banner text-white">
            <img src={props.bgImage} alt="Bannière" />
            {props.children !== undefined && props.children !== "" && (
                <div className="overlay">
                    <h1>{props.children}</h1>
                </div>
            )}
        </div>
    );
};

export default Banner;