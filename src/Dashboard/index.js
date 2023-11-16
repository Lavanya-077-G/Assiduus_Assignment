import React from "react";
import Cashflow from "./Cashflow";
import Invoice from "./Invoice";
import Accountchecking from "./Accountchecking";
import Watchlist from "./Watchlist";
import './dashboard.scss'
const Dashboard = () =>{
    return (<div className="dashboard_container">
        <Accountchecking/>
        <Invoice/>
        <Cashflow/>
        <Watchlist/>
    </div>)
}
export default Dashboard;