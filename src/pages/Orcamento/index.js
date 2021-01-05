import React from 'react';

import celular from '../../images/celular_black.png';

export default function Orcamento(){
    return(
        <div className="wallpaper-celular">
            <div className="orcamento-celular">
                <img src={celular} alt="Celular" />
            </div>
            <div className="orcamento-info">
                <p>Solicite seu orçamento<br/> através do direct no<br/> instagram <span>@nila.ink</span>.</p>
                <a href="https://www.instagram.com/nila.ink/" target="_blank" rel="noreferrer"><p>Solicite o seu<br/> clicando aqui!</p></a>
            </div>
        </div>
    );
}