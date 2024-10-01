function Banner(props) {
    const classes = "banner " + props.css;
    return (
        <div className={classes}>
            <img src={props.bgImage} alt="Bannière" />
            {props.children !== undefined && props.children !== "" && (
                <div className="overlay">
                    <h1 className="text-white">{props.children}</h1>
                </div>
            )}
        </div>
    );
};

export default Banner;