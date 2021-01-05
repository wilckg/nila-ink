import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Fullpage from '../App';
import cadastraPromo from '../pages/Landpage/cadastraPromo';
import Promo from '../pages/Landpage/promo';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Fullpage} />
                <Route exact path="/landpage" component={cadastraPromo} />
                <Route exact path="/landpage/promo" component={Promo} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;