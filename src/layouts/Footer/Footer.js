import React from "react";
import "./Footer.scss"
import logoFooter from "../../assets/images/logoFooter.svg";

function Footer () {
    return(
        <footer>
            <div className="footer-container">
                <img src={logoFooter} alt="logo" />
                <p className="text-footer">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;