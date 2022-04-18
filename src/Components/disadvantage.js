import React from "react";
import Swipper from "./swipper";

const randomTxt =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const createData = (title, desc, img) => {
  return {
    title: title,
    desc: desc,
    img: img,
  };
};

const data = [
  createData("I'm introvert", randomTxt, "introvert.jpg"),
  createData("I don't like read long", randomTxt, "bookRead.png"),
  createData("I have high focus", randomTxt, "focus.jpg"),
  createData("I don't know many story and convertations start", randomTxt, "talk.png"),
];

function disadvantage() {
  return (
    <div className="mt-3">
      <Swipper datas={data} />
    </div>
  );
}

export default disadvantage;
