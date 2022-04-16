import React, { lazy, Suspense } from "react";
const Advantage = lazy(() => import("./advantages"));
const Disadvantage = lazy(() => import("./disadvantage"));

function tabContent({ value }) {
  if (value == "MyAdvan") {
    return (
      <Suspense fallback={<div>Loading... </div>}>
        <h1>My advantages</h1>
        <Advantage />
      </Suspense>
    );
  }
  if (value == "MyDisAdvan") {
    return (
      <Suspense fallback={<div>Loading... </div>}>
        <h1>My disadvantages</h1>
        <Disadvantage />
      </Suspense>
    );
  }
}

export default tabContent;
