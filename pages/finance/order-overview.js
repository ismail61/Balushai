import React from 'react'
import { SideNavigation, OrderOverview, TopNavigation } from "../../components";

function order_overview() {
    return (
        <div className="flex w-screen min-h-screen">
        <SideNavigation />
        <div className="w-full">
          <TopNavigation />
          <OrderOverview />
        </div>
      </div>
    )
}

export default order_overview 