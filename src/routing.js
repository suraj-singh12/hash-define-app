import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import upCertificate from './components/UpCertificate';
import validCertificate from './components/ValidCertificate';


const Router = ({location}) => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/uploadCertificate" component={upCertificate} />
            <Route exact path="/validCertificate" component={validCertificate} />
            {/* using params in /listing (see :id) */}
            {/* <Route path="/listing/:id" component={Listing} />
            <Route path="/details" component={Details} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/checkout" component={Checkout} />
            <Route path='/orders' component={ViewOrders} />

            <Route path='/wishlist' component={WishList} />
            <Route path='/cart' component={Cart} /> */}
        </BrowserRouter>
    )
}

export default Router;