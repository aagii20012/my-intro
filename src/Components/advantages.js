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
  createData(
    "I can learn fast",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "learn.jpg"
  ),
  createData("I can keep trying", "Description", "keepTry.png"),
  createData("I have high focus", "Description", "focus.jpg"),
];

function advantage() {
  return (
    <div className="mt-3">
      <Swipper datas={data} />
    </div>
  );
}

export default advantage;
