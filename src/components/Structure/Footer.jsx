import logoFooter from "../../assets/logoFooter.png";

function Footer() {
    return (
        <footer className = "footer">
            <img className="logoKasa" src = {logoFooter} alt = "Logo Kasa"/>
            <p className="text-white hiddenMobile">© 2020 Kasa. All rights reserved </p>
            <p className="text-white hiddenDesktop">© 2020 Kasa. All <br /> rights reserved </p>
        </footer>
    );
};

export default Footer;