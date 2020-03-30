import React from 'react';
import { Route, NavLink, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import * as Images from '../../assets/images'
import PaymentList from '../payment-list'
import RequestList from '../request-list'
import ServiceList from '../service-list'

const HomePage = () => (
    <Router history={createBrowserHistory()}>
    <header className="app-header">
       <div className="app-header__logos">
        <img src={Images.menu} alt="Menu" />
        <img src={Images.search} alt="Search" />
        <img src={Images.trovaLogo} alt="Logo" />
        <img src={Images.chat} alt="Chat"/>
        <img src={Images.notification} alt="Notification"/>
       </div>
       <div className="app-header__links">
        <img src={Images.tagBack} alt="Back Button" />
        <NavLink className="app-header__link" to="/request">Requests</NavLink>
        <NavLink className="app-header__link" to="/service">Services</NavLink>
        <NavLink className="app-header__link" to="/payments">Payments</NavLink>
       </div>
    </header>
    <main>
    <Switch>
        <Route exact path="/" component={RequestList} />
        <Route exact path="/request" component={RequestList} />
        <Route exact path="/service" component={ServiceList} />
        <Route exact path="/payments" component={PaymentList} />
    </Switch>
    </main>
    </Router>)

export default HomePage