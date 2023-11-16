import React from "react";
import { Menu, ConfigProvider } from "antd";
import { MdDashboard, MdAccountBalanceWallet } from "react-icons/md";
import {LiaDollarSignSolid} from "react-icons/lia";
import {IoDocumentText} from "react-icons/io5";
import {MdContacts} from "react-icons/md";
import './Navbar.scss';
import { useNavigate } from "react-router-dom";
const Navbar = () =>{
  const navigate = useNavigate();
    return(<div className="navBar">
       <ConfigProvider theme={{
         components: {
            Menu: {
              itemActiveBg:'#47B747',
              itemSelectedBg: '#47B747',
              itemSelectedColor: '#FFFFFF',
              itemBorderRadius:0,
            },
          }
    }}> <Menu defaultSelectedKeys={['Dashboard']}>
            <Menu.Item icon={<MdDashboard/>} onClick={()=>navigate('/')} key='Dashboard'>Dashboard</Menu.Item>
            <Menu.Item icon={<MdAccountBalanceWallet/>} onClick={()=>navigate('/Accounts')} key='Accounts'>Accounts</Menu.Item>
            <Menu.Item icon={<LiaDollarSignSolid/>} onClick={()=>navigate('/Payroll')} key='Payroll'>Payroll</Menu.Item>
            <Menu.Item icon={<IoDocumentText/>} onClick={()=>navigate('/Advisor')} key='Advisor'>Advisor</Menu.Item>
            <Menu.Item icon={<MdContacts/>} onClick={()=>navigate('/Contacts')} key='Contacts'>Contacts</Menu.Item>
        </Menu>
        </ConfigProvider>
    </div>)
}
export default Navbar;