import React from "react";
import { Container } from "react-bootstrap";
import HobbyCard from "./hobbyCard";
import { ParallaxProvider } from "react-scroll-parallax";

const createData = (title, desc, img) => {
  return {
    title: title,
    desc: desc,
    img: img,
  };
};

const datas = [
  createData("I like play video games", "desc", "games.jpg"),
  createData("I like watch anime", "desc", "anime.webp"),
  createData("I like read manga", "desc", "manga.jpg"),
  createData("I like watch movie", "desc", "movie.jpg"),
];

function mySpecialty() {
  return (
    <Container style={contStyle}>
      <h1 className="display-4 mb-5">My hobby</h1>
      {datas.map((data, index) => (
        <HobbyCard data={data} key={"hoobyCard" + index} />
      ))}
    </Container>
  );
}

const contStyle = {
  position: "relative",
  padding: "20px",
};

export default mySpecialty;
