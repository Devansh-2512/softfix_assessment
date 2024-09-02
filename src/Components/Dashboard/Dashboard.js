import { Col, Layout, Row, Space, Typography } from "antd";
import React from "react";
import { graphicalData, orderStatus } from "../../data";
import { ContainerFilled } from "@ant-design/icons";
import { Pie } from "@ant-design/charts";
const Dashboard = () => {
  const config = {
    appendPadding: 30,
    data: graphicalData.filter((items) => items.value > 0),
    angleField: "value",
    colorField: "label",
    radius: 0.9,
    // innerRadius: 0.5,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: false,
    style: {
      padding: 10,
      fill: ({ label }) => {
        switch (label) {
          case "Pending Orders":
            return "grey";
          case "Processing Orders":
            return "orange";
          case "Ready To Deliver":
            return "blue";
          case "Delivered Orders":
            return "green";
          case "Returned":
            return "red";
          default:
            return;
        }
      },
    },
    interactions: ["element-selected", "element-active"],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
  };
  const style = {
    padding: "16px 16px",
    // margin:"10px 15px"
  };
  return (
    <Layout.Content style={{ padding: "10px 20px" }}>
      <div>
        <Typography.Title level={3}>Dashboard</Typography.Title>
      </div>
      <Space
        size={"large"}
        style={{ width: "100%", marginTop: "20px" }}
        direction="vertical"
      >
        <Row gutter={10} justify={"space-between"}>
          {orderStatus.map((orders) => (
            <Col key={orders.status} className="gutter-row" span={6}>
              <div className="app-background-color" style={style}>
                <Row justify={"space-between"}>
                  <Col span={16}>
                    <Space style={{ width: "100%" }} direction="vertical">
                      <Typography.Text
                        style={{ fontSize: 35, fontWeight: "bolder" }}
                        className="white-text-color"
                      >
                        {orders.number}
                      </Typography.Text>
                      <Typography.Text className="white-text-color">
                        {orders.status}
                      </Typography.Text>
                    </Space>
                  </Col>
                  <Col span={8} align="end">
                    <ContainerFilled
                      style={{ opacity: 0.2, fontSize: "100px" }}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
        <Row gutter={20}>
          <Col className="gutter-row" span={14}>
            <div style={{ height: "50vh", backgroundColor: "white" }}>
              <Space style={{ width: "100%" }} direction="vertical">
                <div
                  className="app-background-color"
                  style={{ padding: "12px 5px" }}
                >
                  <Typography.Text className="white-text-color">
                    Today's Delivery
                  </Typography.Text>
                </div>
              </Space>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div style={{ height: "50vh", backgroundColor: "white" }}>
              <Space style={{ width: "100%" }} direction="vertical">
                <div
                  className="app-background-color"
                  style={{ padding: "12px 5px" }}
                >
                  <Typography.Text className="white-text-color">
                    Orderview
                  </Typography.Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {graphicalData.map((status) => {
                    return (
                      <Space style={{ width: "30%" }} align="center">
                        <div
                          style={{
                            padding: "4px 10px",
                            backgroundColor: status.color,
                          }}
                        ></div>
                        <Typography.Text>{status.label}</Typography.Text>
                      </Space>
                    );
                  })}
                </div>
                <div style={{ width: "100%", height: "30vh" }}>
                  <Pie {...config} />
                </div>
              </Space>
            </div>
          </Col>
        </Row>
      </Space>
    </Layout.Content>
  );
};

export default Dashboard;
