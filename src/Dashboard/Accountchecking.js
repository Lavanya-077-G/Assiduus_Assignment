import React, { useMemo, useContext } from "react";
import { Select } from "antd";
import './dashboard.scss';
import LineChart from "../Charts/Linechart";
import { GraphContext } from "../App";

const Accountchecking = () => {
  const { setGraphdata, graphData } = useContext(GraphContext);

  const months = useMemo(() => [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' }
  ], []);

  const generateRandomNumbers = () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

  const handleChange = () => {
    setGraphdata({ ...graphData, checkingAccount: generateRandomNumbers() });
  };

  const renderSelect = (defaultValue, options, onChange) => (
    <Select
      defaultValue={defaultValue}
      style={{ height: '30px', width: '100px'}}
      onChange={onChange}
      options={options}
    />
  );

  return (
    <div className="chart_container">
      <div className="chart_header">
        Checking Account
        <div className="select_box_container">
          {renderSelect('Manage', [{ value: 'Manage', label: 'Manage' }, { value: 'Credits', label: 'Credits' }], handleChange)}
          {renderSelect('January', months, handleChange)}
        </div>
      </div>
      <LineChart />
    </div>
  );
};

export default Accountchecking;
