import React from "react";
import { TbRectangleFilled } from "react-icons/tb";
import './dashboard.scss';
import StackedBarChart from "../Charts/Stackedbarchart";

const Cashflow = () => {
  const InIcon = <TbRectangleFilled style={{ color: '#02BB7D' }} />;
  const OutIcon = <TbRectangleFilled style={{ color: '#47B737' }} />;

  const iconStyle = { marginLeft: '5px' };

  return (
    <div className="chart_container">
      <div className="chart_header">
        Total cash flow
        <div className="in_out_container">
          <div>{InIcon}<span style={iconStyle}>In</span></div>
          <div>{OutIcon}<span style={iconStyle}>Out</span></div>
        </div>
      </div>
      <StackedBarChart />
    </div>
  );
};

export default Cashflow;
