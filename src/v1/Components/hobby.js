import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import HobbyCard from "./hobbyCard";

function MySpecialty() {
  const { t, i18n } = useTranslation();
  const datas = t("hobby");
  return (
    <Container style={contStyle}>
      <h1 className="display-4 mb-5">Миний хобби</h1>
      <Row>
        {datas.map((data, index) => (
          <Col key={"hoobyCard" + index} md={6} lg={3} className="mt-3">
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

export default MySpecialty;
