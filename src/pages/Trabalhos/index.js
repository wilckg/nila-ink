import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from 'simple-react-lightbox';

import tatto1 from '../../images/tatto/tatto_1.jpg';
import tatto2 from '../../images/tatto/tatto_2.jpg';
import tatto3 from '../../images/tatto/tatto_3.jpg';
import tatto4 from '../../images/tatto/tatto_4.jpg';
import tatto5 from '../../images/tatto/tatto_5.jpg';
import tatto6 from '../../images/tatto/tatto_6.jpg';
import tatto7 from '../../images/tatto/tatto_7.jpg';
import tatto8 from '../../images/tatto/tatto_8.jpg';
import tatto9 from '../../images/tatto/tatto_9.jpg';
import tatto10 from '../../images/tatto/tatto_10.jpg';
import tatto11 from '../../images/tatto/tatto_11.jpg';
import tatto12 from '../../images/tatto/tatto_12.jpg';

export default function Trabalhos() {
    return (
        <div className="div-trabalhos">
            <div className="info-trabalhos">
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="galeria">
                            <img src={tatto1} />
                            <img src={tatto2} />
                            <img src={tatto3} />
                            <img src={tatto4} />
                            <img src={tatto5} />
                            <img src={tatto6} />
                            <img src={tatto7} />
                            <img src={tatto8} />
                            <img src={tatto9} />
                            <img src={tatto10} />
                            <img src={tatto11} />
                            <img src={tatto12} />
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
                <div className="galerio-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum pellentesque eros, id mollis quam elementum at. Donec lectus justo, sodales sed lobortis et, aliquam at metus.
                </p>
                </div>
            </div>
        </div>
    );
}