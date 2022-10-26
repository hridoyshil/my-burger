import React from 'react';
import Header from './Header/Header';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import Spinner from './Spinner/Spinner';
import Auth from './Auth/Auth';
import { connect } from 'react-redux';

import { Route, Switch, Redirect } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        token: state.token,
    }
}


const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <BurgerBuilder />
                < Orders />
                < Checkout />
                {/* <Spinner /> */}
                <Auth />
                {/* <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} /> */}
            </div>
        </div>
    )
}

export default Main;
// export default connect(mapStateToProps)(Main);