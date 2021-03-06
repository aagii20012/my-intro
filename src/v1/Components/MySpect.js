import React, { useState } from "react";
import TabContent from "./tabContent";
import { Tabs, Tab } from "react-bootstrap";

function MySpect() {
  const [key, setKey] = useState("MyAdvan");
  return (
    <div style={contStyle}>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} id="uncontrolled-tab-example" className="mb-3 nav-fill">
        <Tab eventKey="MyAdvan" title="My Advantage">
          <TabContent value={key} />
        </Tab>
        <Tab eventKey="MyDisAdvan" title="My Disadvantage">
          <TabContent value={key} />
        </Tab>
      </Tabs>
    </div>
  );
}

const contStyle = {
  position: "relative",
  height: "auto",
  padding: "20px",
};

export default MySpect;
