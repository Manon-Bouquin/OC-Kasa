import logoFooter from "../../assets/logoFooter.png";

function Footer() {
    return (
        <footer className = "footer">
            <img src = {logoFooter} alt = "Logo Kasa"/>
            <p className="text-white">© 2020 Kasa. All rights reserved </p>
        </footer>
    );
};

export default Footer;