import React from "react";
import Header from "./Header";
import imageList from "../LandingImages";
import { Link } from "react-router-dom";
import {
  Carousel,
  ListGroup,
  ListGroupItem,
  ButtonToolbar,
  Button
} from "react-bootstrap";
// AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE
class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        <div>
          <Carousel controls={false} indicators={false} interval={5000}>
            <Carousel.Item>
              <img alt="car" src={imageList[0]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[1]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[2]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[3]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[4]} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="car" src={imageList[5]} />
            </Carousel.Item>
          </Carousel>
          <div style={{ backgroundColor: "#546e7a" }}>
            <div
              ref="contact"
              style={{
                backgroundColor: "#546e7a",
                height: "400px",
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "267px"
              }}
            >
              <h3
                style={{
                  margin: "0px",
                  paddingTop: "30px",
                  textAlign: "center"
                }}
              >
                Store Hours
              </h3>
              <h5 style={{ fontStyle: "italic", textAlign: "center" }}>
                By Appointment Only
              </h5>
              <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
                <li>10:00 AM - 6:00 PM Monday - Friday</li>
                <li>11:00 AM - 5:00 PM Saturday</li>
                <li>11:00 AM - 4:00 PM Sunday</li>
              </ul>
              <h3 style={{ textAlign: "center" }}>Contact Information</h3>
              <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
                <li>Phone: (714) 987-1661</li>
                <li>Email: info@fastturtlemotors.com</li>
              </ul>
              <div className="hidden-xs">
                <div
                  style={{
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingTop: "15px"
                  }}
                >
                  <ButtonToolbar>
                    <Button bsStyle="danger" bsSize="large">
                      <Link style={{ color: "#333" }} to={"/inventory"}>
                        Inventory
                      </Link>
                    </Button>
                  </ButtonToolbar>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              height: "0",
              paddingBottom: "56.25%",
              overflow: "hidden"
            }}
          >
            <iframe
              style={{
                border: "0",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
                // maxHeight: "450px"
              }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE&q=22605+La+Palma+Ave+ste+505,Yotba+Linda+CA"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
