import { Card, Col, Layout, Row, Typography } from "antd";
import React, { useState } from "react";

const OrdersStatusScreen = ({ openNotification }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [userOrderStatusData, setUserOrderStatusData] = useState([
    {
      name: "Jeanette Russell",
      orderId: "#ORD-0023",
      status: "Pending",
    },
    {
      name: "Ken Brown",
      orderId: "#ORD-0022",
      status: "Pending",
    },
    {
      name: "Kristin Murray",
      orderId: "#ORD-0020",
      status: "Pending",
    },
    {
      name: "Kristin Murray",
      orderId: "#ORD-0025",
      status: "Processing",
    },
    {
      name: "Lynn Hicks",
      orderId: "#ORD-0024",
      status: "ReadyToDeliver",
    },
    {
      name: "Owen Ruiz",
      orderId: "#ORD-0021",
      status: "ReadyToDeliver",
    },
    {
      name: "Catherine Wheeler",
      orderId: "#ORD-0019",
      status: "ReadyToDeliver",
    },
  ]);
  const getStatusOrders = (status) => {
    return userOrderStatusData
      .filter((items) => items.status === status)
      .map((orderList) => (
        <Col
          id={orderList.orderId}
          draggable
          onDrag={(e) => {
            setDraggedItem(e.currentTarget.id);
          }}
          className="gutter-row"
          span={22}
        >
          <Card size="small" key={orderList.orderId}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography.Text>{orderList.name}</Typography.Text>
              <Typography.Text>{orderList.orderId}</Typography.Text>
            </div>
          </Card>
        </Col>
      ));
  };

  const handleDropItem = (destination) => {
    // let updation = 0;
    const updatedTasks = userOrderStatusData.map((userOrder) => {
      if (
        userOrder.orderId === draggedItem &&
        userOrder.status !== destination
      ) {
        // updation = 1;
        return {
          ...userOrder,
          status: destination,
        };
      } else {
        return userOrder;
      }
    });
    openNotification({
      type: "success",
      message: "Status Changed Successfully",
    });
    // if (updation) {
    //   openNotification({
    //     type: "success",
    //     message: "Status Changed Successfully",
    //   });
    // } else {
    //   openNotification({ type: "error", message: "Status Not Changed" });
    // }
    setUserOrderStatusData(updatedTasks);
  };

  return (
    <Layout.Content style={{ padding: "10px 5px" }}>
      <div>
        <Typography.Title level={3}>Order Status</Typography.Title>
      </div>
      <div className="order-status-container">
        <Row gutter={10}>
          <Col
            onDragOver={(event) => {
              if(draggedItem){
                let draggedOrder = userOrderStatusData.find(
                  (item) => item.orderId === draggedItem
                );
                if (draggedOrder.status !== "Pending") {
                  event.preventDefault();
                }
              }
            }}
            onDrop={() => {
              handleDropItem("Pending");
            }}
            className="gutter-row"
            key={"Pending"}
            span={8}
          >
            <div className="order-status-collection">
              <div className="status-header pending-header-bgc">
                <Typography.Text className="white-text-color">
                  Pending
                </Typography.Text>
              </div>
              <Row gutter={[20, 10]} justify={"center"}>
                {getStatusOrders("Pending")}
              </Row>
            </div>
          </Col>
          <Col
            onDragOver={(event) => {
              if(draggedItem){
                let draggedOrder = userOrderStatusData.find(
                  (item) => item.orderId === draggedItem
                );
                if (draggedOrder.status !== "Processing") {
                  event.preventDefault();
                }
              }
            }}
            onDrop={() => {
              handleDropItem("Processing");
            }}
            className="gutter-row"
            key={"Processing"}
            span={8}
          >
            <div className="order-status-collection">
              <div className="status-header processing-header-bgc">
                <Typography.Text>Processing</Typography.Text>
              </div>
              <Row gutter={[20, 10]} justify={"center"}>
                {getStatusOrders("Processing")}
              </Row>
            </div>
          </Col>
          <Col
            onDragOver={(event) => {
              if(draggedItem){
                let draggedOrder = userOrderStatusData.find(
                  (item) => item.orderId === draggedItem
                );
                if (draggedOrder.status !== "ReadyToDeliver") {
                  event.preventDefault();
                }
              }
            }}
            onDrop={() => {
              handleDropItem("ReadyToDeliver");
            }}
            className="gutter-row"
            key={"ReadyToDeliver"}
            span={8}
          >
            <div className="order-status-collection">
              <div className="status-header readytodeliver-header-bgc">
                <Typography.Text className="white-text-color">
                  Ready to Deliver
                </Typography.Text>
              </div>
              <Row gutter={[20, 10]} justify={"center"}>
                {getStatusOrders("ReadyToDeliver")}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Layout.Content>
  );
};

export default OrdersStatusScreen;
