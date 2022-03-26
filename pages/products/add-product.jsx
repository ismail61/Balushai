import React from "react";
import { SideNavigation, Table, TopNavigation } from "../../components";
import { Editor } from "../../components";

function add_products() {
  return (
    <div className="flex w-screen min-h-screen">
      <SideNavigation />
      <div className="w-full">
        <TopNavigation />
        <Editor/>
      </div>
    </div>
  );
}

export default add_products;
