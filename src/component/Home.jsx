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
                src="./images/thor.jpeg"
                style={{
                  height: "20rem",
                  width: "15rem",
                }}
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
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src="./images/ironman.png"
                style={{ height: "20rem", width: "20rem" }}
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody>
                <MDBCardTitle>Ironman</MDBCardTitle>
                <hr />
                <MDBCardText>
                  Tony Stark created an advanced suit of armor to save his life
                  and escape captivity. Now with a new outlook on life, Tony
                  uses his money and intelligence to make the world a safer,
                  better place as Iron Man.
                </MDBCardText>
                <a
                  href="/ironman"
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
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src="./images/cap.jpg"
                style={{ height: "20rem", width: "15rem" }}
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody>
                <MDBCardTitle>Captain America</MDBCardTitle>
                <hr />
                <MDBCardText>
                  Steve Rogers took the super soldier serum to become America's
                  one-man army. Fighting for the red, white and blue for over 60
                  years, Captain America is the living, breathing symbol of
                  freedom and liberty.
                </MDBCardText>
                <a
                  href="/captainamerica"
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
