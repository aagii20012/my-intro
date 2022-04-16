import React from "react";
import Swipper from "./swipper";

const createData = (title, desc, img) => {
  return {
    title: title,
    desc: desc,
    img: img,
  };
};

const data = [
  createData("I'm introvert", "Description", "introvert.jpg"),
  createData("I don't like read long", " Description", "bookRead.png"),
  createData("I have high focus", " Description", "focus.jpg"),
  createData("I don't know many story and convertations start", " Description", "talk.png"),
];

function disadvantage() {
  return (
    <div className="mt-3">
      <Swipper datas={data} />
    </div>
  );
}

export default disadvantage;
