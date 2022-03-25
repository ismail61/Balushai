import React, { Component } from "react";
import Slider from './Slider';
import Item from "./Item";
import Mainbody from "./MainBody";
import LoadMore from "./LoadMore";

class Body extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Item />
                <Mainbody />
                <LoadMore />
            </div>
        );
    }
}
export default Body;