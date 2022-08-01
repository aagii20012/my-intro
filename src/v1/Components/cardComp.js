import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from "mdb-react-ui-kit";

function cardComp({ data }) {
  let image = process.env.PUBLIC_URL + "/img/" + data.img;
  return (
    <MDBCard background="dark" className="text-white">
      <MDBCardImage overlay src={image} style={imgStyle} className="img-fluid img-opac" alt="..." />
      <MDBCardOverlay className="text-center">
        <MDBCardTitle className="text-body">
          <p className="text-center text-white">{data.title}</p>
        </MDBCardTitle>
        <hr style={{ borderColor: "white" }}></hr>
        <MDBCardText className=" ">
          <span className="text-center font-weight-bold">{data.desc}</span>
        </MDBCardText>
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
