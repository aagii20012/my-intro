import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

function Hello() {
  return (
    <Container style={conStyle} fluid="md">
      <Row className="align-items-center h-75">
        <Col className="px-2">
          <div className="justify-content-center">
            <Parallax speed={10}>
              <h2 style={bigWord}>Hello welcome</h2>
              <p style={smallWord}> My name is Altangerl.</p>
            </Parallax>
          </div>
        </Col>
        <Col>
          <Parallax speed={-10}>
            <img src="/img/welcome.png" alt="welcome" className="img-fluid" />
          </Parallax>
        </Col>
      </Row>
    </Container>
  );
}

const conStyle = {
  position: "relative",
  height: "100vh",
};
const bigWord = {
  fontSize: "60px",
  fontWeight: "900",
  lineHeight: "1.3",
};
const smallWord = {
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "1.5",
};

export default Hello;
