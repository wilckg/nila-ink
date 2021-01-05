import React from 'react';

import cupom from '../../images/cupom-nila-ink.png';

import './promo.css';

export default function Promo() {

    return (
        <div className="container-promo-cupom">
            <div className="container-promo-info">
                <div className="promo-image">
                    <img src={cupom} className="cupom-promo" alt="Cupom dá promoção" />
                </div>
                <div className="promo-info">
                    <p>Você acaba de<br /> ganhar <span className="text-yellow">15% off</span> na<br /> sua próxima tatto!<span className="text-red"><br />Não perca um cupom!</span></p>
                    <a href="https://www.instagram.com/nila.ink/" target="_blank" rel="noreferrer"><p>Já Printei!</p></a>
                </div>
            </div>
        </div>
    );

}