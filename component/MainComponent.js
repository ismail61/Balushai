import React from "react";
import Body from './body/Body';
import { Switch, Route } from "react-router-dom";
import Login from "./header/Login";
import Signup from "./header/Signup";
import SaveMoreOnApp from "./header/SaveMoreOnApp";
import SellOnDaraz from "./header/SellOnDaraz";
import CustomerCare from "./header/CustomerCare";
import TrackMyOrder from "./header/TrackMyOrder";
import Affiliated from "./header/Affiliated";

const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Body} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/App" exact component={SaveMoreOnApp} />
                <Route path="/SellerLogin" exact component={SellOnDaraz} />
                <Route path="/CustomerCare" exact component={CustomerCare} />
                <Route path="/TrackOrder" exact component={TrackMyOrder} />
                <Route path="/Affiliated" exact component={Affiliated} />
            </Switch>
        </div>
    );
}
export default MainComponent;