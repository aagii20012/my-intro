import React, { lazy, Suspense } from "react";
const Advantage = lazy(() => import("./advantages"));
const Disadvantage = lazy(() => import("./disadvantage"));

function tabContent({ value }) {
  if (value == "MyAdvan") {
    return (
      <Suspense fallback={<div>Loading... </div>}>
        <h1>Миний давуу </h1>
        <Advantage />
      </Suspense>
    );
  }
  if (value === "MyDisAdvan") {
    return (
      <Suspense fallback={<div>Loading... </div>}>
        <h1>Миний сул тал</h1>
        <Disadvantage />
      </Suspense>
    );
  }
}

export default tabContent;
