import React, { useState } from "react";
import { Button } from "antd";
import './dashboard.scss';
import BarChart from "../Charts/Barchart";
import Popupmodel from "../Popupmodel";

const InvoiceComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const buttonStyle = { backgroundColor: '#EAF0FD', color: '#7BB6AC' };

  return (
    <div className="chart_container">
      <div className="chart_header">
        Invoices owed to you 
        <Button onClick={openModal} style={buttonStyle}>New Sales Invoice</Button>
      </div>
      <BarChart/>
      {isModalOpen && <Popupmodel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
};

export default InvoiceComponent;
