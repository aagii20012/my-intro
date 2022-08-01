import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";

function Hello() {
  const { t } = useTranslation();
  return (
    <Container style={conStyle} fluid="md">
      <Row className="align-items-center h-75">
        <Col className="hello-desc">
          <div className="justify-content-center">
            <Parallax speed={10}>
              <h2 style={bigWord}>
                {t("greating")} <br /> {t("meeting")}
              </h2>
              <p style={smallWord} dangerouslySetInnerHTML={{ __html: t("intro") }}></p>
            </Parallax>
          </div>
        </Col>
        <Col sm={0} className="hello-img">
          <Parallax speed={-20}>
            <img src={process.env.PUBLIC_URL + "/img/welcome.png"} alt="welcome" className="img-fluid" />
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
  fontSize: "40px",
  fontWeight: "900",
  lineHeight: "1.3",
};
const smallWord = {
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "1.5",
};

export default Hello;
