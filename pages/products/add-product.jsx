import React from "react";
import { SideNavigation, Product, TopNavigation } from "../../components";

function add_products() {
  return (
    <div className="flex w-screen min-h-screen">
      <SideNavigation />
      <div className="w-full">
        <TopNavigation />
        <Product/>
      </div>
    </div>
  );
}

export default add_products;