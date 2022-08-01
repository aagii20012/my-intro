import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
const Advantage = lazy(() => import("./advantages"));
const Disadvantage = lazy(() => import("./disadvantage"));

function SwitchPage({ swithState }) {
  const { t, i18n } = useTranslation();
  if (swithState == "MyAdvan") {
    return <Advantage data={t("advantage")} title={""} />;
  }
  if (swithState == "MyDisAdvan") {
    return <Disadvantage data={t("disadvantage")} title={""} />;
  }
}

function tabContent({ value }) {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <SwitchPage swithState={value} />
    </Suspense>
  );
}

export default tabContent;
