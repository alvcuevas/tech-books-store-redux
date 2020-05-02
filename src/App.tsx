import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './views/home';
import CartView from './views/cart';
import NavigationBar from './components/navigation-bar';

import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <NavigationBar />
                <Switch>
                    <Route exact path={'/'} component={HomeView} />
                    <Route path={'/cart'} component={CartView} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
