import React from "react";
import { SideNavigation, SingleProduct, TopNavigation } from "../../components";

function add_products() {
  return (
    <div className="flex w-screen min-h-screen">
      <SideNavigation />
      <div className="w-full">
        <TopNavigation />
        <SingleProduct/>
      </div>
    </div>
  );
}

export default add_products;