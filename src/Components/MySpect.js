import React, { useState } from "react";
import TabContent from "./tabContent";
import { Tabs, Tab } from "react-bootstrap";

function MySpect() {
  const [key, setKey] = useState("MyAdvan");
  return (
    <div style={contStyle}>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="MyAdvan" title="My advantages">
          <TabContent value={key} />
        </Tab>
        <Tab eventKey="MyDisAdvan" title="My disadvantages">
          <TabContent value={key} />
        </Tab>
      </Tabs>
    </div>
  );
}

const contStyle = {
  position: "relative",
  height: "70vh",
  padding: "20px",
};

export default MySpect;
