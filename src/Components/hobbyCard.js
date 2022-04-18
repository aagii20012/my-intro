import React from "react";
import { MDBRipple, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

function hobbyCard({ data }) {
  let image = "img/" + data.img;
  return (
    <MDBCard className="position-relative p-2">
      <MDBRipple rippleTag="div" className="bg-image hover-overlay hover-zoom hover-shadow">
        <MDBCardImage src={image} style={img} fluid position="top" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{data.title}</MDBCardTitle>
        <MDBCardText>{data.desc}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

const img = {
  width: "100%",
  height: "auto",
};
export default hobbyCard;
