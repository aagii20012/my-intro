import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Parallax } from "react-scroll-parallax";

function hobbyCard({ data }) {
  let image = "img/" + data.img;
  return (
    <MDBCard className="mt-3 position-relative">
      <MDBRow className="g-0 ">
        <MDBCol md="4">
          <MDBCardImage src={image} style={img} className="h-100 img-fluid" alt="..." fluid />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{data.title}</MDBCardTitle>
            <MDBCardText>{data.desc}</MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

const img = {
  width: "100%",
  height: "auto",
};
export default hobbyCard;
