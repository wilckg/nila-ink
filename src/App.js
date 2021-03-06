import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './pages/Home';

import './style.css';
import Contatos from './pages/Contatos';
import Orcamento from './pages/Orcamento';
import Artista from './pages/Artista';
import Trabalhos from './pages/Trabalhos';

// const pluginWrapper = () => {
//   require('./statics/fullpage.scrollHorizontally.min');
// };


const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    navigation={true}
    navigationPosition={'left'}
    anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage']}
    licenseKey={'YOUR_KEY_HERE'}
    // offsetSections = {true}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      console.log(fullpageApi);
      // fullpageApi.offsetSections = true;
      return (
        <ReactFullpage.Wrapper>
          <div className="section home" data-percentage="100" data-centered="true">
            <Home />
          </div>
          <div className="section trabalhos" data-percentage="100" data-centered="true">
            <Trabalhos />
          </div>
          <div className="section artista" data-percentage="100" data-centered="true">
            <Artista />
          </div>
          <div className="section orcamento" data-percentage="100" data-centered="true">
            <Orcamento />
          </div>
          <div className="section fp-auto-height contatos">
            <Contatos />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;