import React from "react";
import { Card } from "react-bootstrap";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from "mdb-react-ui-kit";

function cardComp({ data }) {
  let image = "img/" + data.img;
  return (
    <MDBCard background="dark" className="text-white">
      <MDBCardImage overlay src={image} style={imgStyle} className="img-fluid" alt="..." />
      <MDBCardOverlay>
        <MDBCardTitle className="text-body">{data.title}</MDBCardTitle>
        <MDBCardText className="text-dark">{data.desc}</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
}

const imgStyle = {
  height: "400px",
  maxHeight: "400px",
  minHeight: "300px",
};

export default cardComp;
