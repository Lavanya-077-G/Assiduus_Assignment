import React, { useContext } from "react";
import './dashboard.scss';
import { GraphContext } from "../App";

const Watchlist = () => {
    const { graphData } = useContext(GraphContext);
    const { accountWatchlist: data } = graphData;

    return (
        <div className="chart_container">
            <div className="chart_header">
                Account watchlist
            </div>
            <table className="watchlist_table">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>This Month</th>
                        <th>YTD</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.account}</td>
                            <td>{obj.month}</td>
                            <td>{obj.ytd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Watchlist;
