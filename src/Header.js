import React, { useContext } from "react";
import { Button, Input, Select } from "antd";
import { RiSearchLine } from 'react-icons/ri';
import { BsFillBellFill } from "react-icons/bs";
import './Header.scss';
import { GraphContext } from "./App";
import { MdCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const { setGraphdata, graphData } = useContext(GraphContext);


  const SearchIcon = <RiSearchLine className="search-icon" />;
  const BellIcon = <BsFillBellFill style={{ fontSize: '1.1rem', paddingTop: '0.3rem' }} />;
  const CircleIcon = <MdCircle style={{
    position: 'absolute',
    right: '8.7rem',
    fontSize: '0.4rem',
    top: '1.5rem',
    color: 'green',
    border: 'white 1px solid',
    borderRadius: '50%',
    backgroundColor: 'white',
  }} />;
  const UserImage = <img src="https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/Coding_Blog_Header_1500x750-606x303.jpg.webp" alt="user" />;
  const ArrowDownIcon = <IoMdArrowDropdown style={{ color: 'Black', fontSize: '1rem' }} />;


  const randomizeData = (data) => {
    return {
      checkingAccount: data.checkingAccount.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1),
      cashFlow: data.cashFlow.map(cashFlowItem => ({
        ...cashFlowItem,
        value1: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
        value2: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
      })),
      Invoice: data.Invoice.map(() => Math.floor(Math.random() * (100 - 10 + 1)) + 10),
      accountWatchlist: data.accountWatchlist.map(watchlistItem => ({
        ...watchlistItem,
        month: ((Math.random() * (10000 - 1000 + 1)) + 1000).toFixed(2),
        ytd: ((Math.random() * (10000 - 1000 + 1)) + 1000).toFixed(2),
      })),
    };
  };

  const handleClick = () => {
    const randomizedData = randomizeData(graphData);
    setGraphdata({ ...graphData, ...randomizedData });
  };

  return (
    <div className="header_Container">
      <img className="Logo" src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png" alt="Logo" />
      <div className="leftPanel">
        <Button style={{ marginRight: '5px', height: '1.8rem', lineHeight: '1.4' }} type="primary" onClick={handleClick}>Randomize Data</Button>
        <Input style={{ width: '12.5rem' }} prefix={SearchIcon} />
        {BellIcon}
        {CircleIcon}
        {UserImage}
        <Select options={[]} suffixIcon={ArrowDownIcon} className="userDropdown"></Select>
      </div>
    </div>
  );
};

export default Header;
