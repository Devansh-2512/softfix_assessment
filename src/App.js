import { BarsOutlined, HomeFilled, TagFilled, UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Input, Layout, Menu, notification, Row, Space, Typography } from "antd";
// import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./App.css"
import Dashboard from "./Components/Dashboard/Dashboard";
import Pos from "./Components/Pos/Pos";
import Orders from "./Components/Orders/Orders.js"
import OrdersStatusScreen from "./Components/Orders Status Screen/OrdersStatusScreen";
import Expenses from "./Components/Expenses/Expense.js";
import Customers from "./Components/Customers/Customers.js";
import Services from "./Components/Services/Services.js";
import Reports from "./Components/Reports/Reports.js";
import Settings from "./Components/Settings/Settings.js";
function App() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = ({type,message}) => {
    api[type]({
      message: message,
      placement:"topRight",
      duration:2
    });
  };
  const [selectedMenuItem,setSlectedMenuItem] = useState("dashboard")
  const items = [
    {
      label:"Dashboard",
      key:"dashboard",
      icon:<HomeFilled />
    },
    {
      key: 'pos',
      icon: <TagFilled rotate={270}/>,
      label: 'Pos',
    },
    {
      key: 'orders',
      icon: <UploadOutlined />,
      label: 'Orders',
    },
    {
      label:"Order Status Screen",
      key:"orderStatusScreen",
      icon:<HomeFilled />
    },
    {
      key: 'expenses',
      icon: <TagFilled rotate={270}/>,
      label: 'Expenses',
    },
    {
      key: 'customers',
      icon: <UploadOutlined />,
      label: 'Customers',
    },
    {
      label:"Services",
      key:"services",
      icon:<HomeFilled />
    },
    {
      key: 'reports',
      icon: <TagFilled rotate={270}/>,
      label: 'Reports',
    },
    {
      key: 'settings',
      icon: <UploadOutlined />,
      label: 'Settings',
    },
  ]

  const getComponentForItem=()=>{
    switch(selectedMenuItem){
      case "dashboard": return <Dashboard/>
      case "pos": return <Pos/>
      case "orders": return <Orders/>
      case "orderStatusScreen": return <OrdersStatusScreen openNotification={openNotification}/>
      case "expenses": return <Expenses/>
      case "customers": return <Customers/>
      case "services": return <Services/>
      case "reports": return <Reports/>
      case "settings": return <Settings/>
      default:return <></>
    }
  }

  return (
    <Layout>
      {contextHolder}
      <Layout.Sider collapsible theme="light" style={{height:"100vh"}}>
        <div><Typography.Title level={3}>YB Laundry</Typography.Title></div>
        <Divider/>
      <Menu onSelect={(e)=>{
        console.log(e,"selected")
        setSlectedMenuItem(e.key)
      }} theme="light" mode="inline" defaultSelectedKeys={['dashboard']} items={items} />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{
            padding: 0,
            background: "#08979c",
          }}>
        <Row  justify={"space-evenly"}>
        <Col span={12} className="gutter-row">
        <Button
            type="text"
            icon={<BarsOutlined className="header-button" />}
            // onClick={() => setCollapsed(!collapsed)}
          />
        </Col>
          <Col span={11} align='end'>
          <Typography.Text  className="white-text-color">
            Hello,
          </Typography.Text>
          </Col>
        </Row>
        </Layout.Header>
        <Layout.Content>
        {
          getComponentForItem()
        }
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
