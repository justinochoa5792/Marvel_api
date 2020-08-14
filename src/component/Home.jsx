import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Pick Your Favorite Superhero</h1>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody>
                <MDBCardTitle>Thor</MDBCardTitle>
                <hr />
                <MDBCardText>
                  The God of thunder and lightning, Thor wields one of the
                  greatest weapons ever made, the enchanted hammer Mjolnir.
                </MDBCardText>
                <a
                  href="/thor"
                  className="black-text d-flex justify-content-end"
                >
                  <h5>
                    Read more
                    <MDBIcon icon="angle-double-right" className="ml-2" />
                  </h5>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Home;
