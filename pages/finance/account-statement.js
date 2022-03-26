import React from "react";
import { SideNavigation, AccountStatement, TopNavigation } from "../../components";


function account_statement() {
  return (
    <div className="flex w-screen min-h-screen">
      <SideNavigation />
      <div className="w-full">
        <TopNavigation />
        <AccountStatement />
      </div>
    </div>
  );
}

export default account_statement;
