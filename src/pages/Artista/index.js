import React from 'react';

import artista from "../../images/nila-artista1.png";

export default function Artista() {
    return (
        <div className="div-artista">
            <div className="info-artista">
                <div className="div-artista-foto">
                    <img src={artista} className="img-artista" alt="foto da artista" />
                </div>
                <div className="div-artista-texto">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum pellentesque eros, id mollis quam elementum at. Donec lectus justo, sodales sed lobortis et, aliquam at metus.
                    </p>
                </div>
            </div>
        </div>
    );
}