import React from "react";
import Hello from "./Components/hello";
import MySpect from "./Components/MySpect";
import Navbar from "./Components/navbar";
import Hobby from "./Components/hobby";
import "bootstrap/dist/css/bootstrap.min.css";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
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

export default App;
