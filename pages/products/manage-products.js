import React from "react";
import { SideNavigation, Table, TopNavigation } from "../../components";

function manage_products() {
  return (
    <div className="flex w-screen min-h-screen">
      <SideNavigation />
      <div className="w-full">
        <TopNavigation />
        <Table />
      </div>
    </div>
  );
}

export default manage_products;
