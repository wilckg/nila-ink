import React, { useState } from 'react';
import './promo.css';

import Button from 'react-bootstrap/Button';

import logo from "../../images/logo_home.png";

export default function CadastraPromo() {

    const [email, setEmail] = useState();

    return (
        <div className="p-3 container-promo">
            <div className="row">
                <div className="col coluna-logo">
                    <img className="logo-landpage" src={logo} alt="Logo nila-ink" />
                </div>
            </div>
            <div className="coluna-corpo">
                <div className="col">
                    <p className="promo-titulo">Promoção da <span className="text-red">Nila</span> <span className="text-yellow">Ink</span>, cadastre-se e aproveite a promoção </p>
                </div>
                <div className="col div-input-promo">
                    <label>E-mail:</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.value)} placeholder="E-mail" autoComplete="off" />
                </div>
                <div className="col div-button-promo">
                    <Button variant="danger">Cadastrar</Button>
                </div>
            </div>
        </div>
    );

}