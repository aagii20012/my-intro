import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from "mdb-react-ui-kit";

function cardComp({ data }) {
  let image = process.env.PUBLIC_URL + "/img/" + data.img;
  return (
    <MDBCard background="dark" className="text-white">
      <MDBCardImage overlay src={image} style={imgStyle} className="img-fluid" alt="..." />
      <MDBCardOverlay>
        <MDBCardTitle className="text-body">
          <p className="text-success">{data.title}</p>
        </MDBCardTitle>
        <MDBCardText className="text-dark text-info">
          <p className="text-success">{data.desc}</p>
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
