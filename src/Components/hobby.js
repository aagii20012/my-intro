import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HobbyCard from "./hobbyCard";

const createData = (title, desc, img) => {
  return {
    title: title,
    desc: desc,
    img: img,
  };
};

const randomTxt =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const datas = [
  createData("I like play video games", randomTxt, "games.jpg"),
  createData("I like watch anime", randomTxt, "anime.webp"),
  createData("I like read manga", randomTxt, "manga.jpg"),
  createData("I like watch movie", randomTxt, "movie.jpg"),
];

function mySpecialty() {
  return (
    <Container style={contStyle}>
      <h1 className="display-4 mb-5">My hobby</h1>
      <Row>
        {datas.map((data, index) => (
          <Col key={"hoobyCard" + index} md={6} lg={3}>
            <HobbyCard data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const contStyle = {
  position: "relative",
  padding: "20px",
};

export default mySpecialty;
