import React from "react";
import Swipper from "./swipper";

function advantage({ data, title }) {
  return (
    <>
      <h1>{title} </h1>
      <div className="mt-3">
        <Swipper datas={data} />
      </div>
    </>
  );
}

export default advantage;
