import React from 'react';

import Menu from '../../components/Menu';

export default function Home() {
    return (
        <div>
            <Menu />
            <div className="text-home">
                <div className="div-titulo">
                    <p className="text-titulo">Bem-vindo à <span className="text-red">Nila</span> <span className="text-yellow">Ink</span><br /> do seu jeito </p>
                </div>
            </div>
            <div className="div-seta">
                <div className="setas">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}