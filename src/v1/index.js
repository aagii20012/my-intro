import React from "react";
import Hello from "./Components/hello";
import MySpect from "./Components/MySpect";
import Navbar from "./Components/navbar";
import Hobby from "./Components/hobby";
import { ParallaxProvider } from "react-scroll-parallax";

function defualtPage() {
  return (
    <div>
      <ParallaxProvider>
        <Navbar />
        <div id="Hello">
          <Hello />
        </div>
        <div id="MySpec" style={{ backgroundColor: "#F0F1F0" }}>
          <MySpect />
        </div>
        <div id="MyHobies">
          <Hobby />
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default defualtPage;
