import React from 'react';
import logo from "../../images/logo_footer.png";

import icon_facebook from "../../images/icon-facebook.png";
import icon_twitter from "../../images/icon-twitter.png";
import icon_instagram from "../../images/icon-instagram.png";
import icon_pinterest from "../../images/icon-pinterest.png";

export default function Contatos() {
    return (
        <div className="div-contatos">
            <div className="footer">
                <div className="links">
                    <ul>
                        <li><a href="#firstPage">Home</a></li>
                        <li><a href="#secondPage">Trabalhos</a></li>
                        <li><a href="#thirdPage">Artista</a></li>
                        <li><a href="#fourthPage">Orçamento</a></li>
                    </ul>
                </div>
                <div className="localizacao">
                    <h2>Localização</h2>
                    <p>Av Da Igreja Lote R1 22 R/C Esq., 2480-301, Porto Mos Sao Joao Baptista Pedro, Leiria</p>
                </div>
                <div className="whatsapp">
                    <h2>Contato</h2>
                    <span>WhatsApp</span><br />
                    <span>(11)1234-4567</span>
                </div>
                <div className="sociais">
                    <a href="/" target="_blank" rel="noreferrer"><img src={icon_facebook} className="icon-facebook" alt="icon-facebook"  /></a>
                    <a href="/" target="_blank" rel="noreferrer"><img src={icon_twitter} className="icon-twitter" alt="icon-twitter"  /></a>
                    <a href="https://www.instagram.com/nila.ink/" target="_blank" rel="noreferrer"><img src={icon_instagram} className="icon-instagram" alt="icon-instagram"  /></a>
                    <a href="/" target="_blank" rel="noreferrer"><img src={icon_pinterest} className="icon-pinterest" alt="icon-pinterest"  /></a>
                </div>
            </div>
            <div className="img-footer">
                <img src={logo} className="logo-footer" alt="logo" />
            </div>
        </div>
    );
}