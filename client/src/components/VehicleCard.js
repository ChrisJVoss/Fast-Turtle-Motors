import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPage: [],
      slides: []
    };
    this.makeCarousel = this.makeCarousel.bind(this);
  }

  makeCarousel(imgList) {
    const slides = [];
    for (let i = 0; i < imgList.length; i++) {
      let slide = (
        <Carousel.Item>
          <img alt="car" src={imgList[i]} />
        </Carousel.Item>
      );

      slides.push(slide);
    }
    this.setState({ slides });
  }

  componentDidMount() {
    const request = async () => {
      const response = await fetch("/cars/" + this.props.match.params.id);
      const card = await response.json();
      let cardPage = card.map(info => {
        const carName =
          info.year + " " + info.make + " " + info.model + " " + info.trimLevel;

        const imageList = info.files.map(image => {
          return image.base64;
        });
        this.makeCarousel(imageList);
        return (
          <div style={{ color: "#213159" }}>
            <div style={{ margin: "2% 2%" }}>
              <Carousel controls={true} indicators={false} interval={5000}>
                {this.state.slides}
              </Carousel>
            </div>
            <div className="carInfo ">
              <h4 style={{ textAlign: "center" }}>
                {" "}
                {info.year} {info.make} {info.model} {info.trimLevel}{" "}
              </h4>
              <ul className="collection with-header">
                <li className="collection-header">
                  <strong>Price:</strong> {info.sold ? "SOLD!" : info.price}
                </li>
                <li className="collection-item">
                  <strong>Year:</strong> {info.year}
                </li>
                <li className="collection-item">
                  <strong>Make:</strong> {info.make}
                </li>
                <li className="collection-item">
                  <strong>Model:</strong> {info.model}
                </li>
                <li className="collection-item">
                  <strong>Trim:</strong> {info.trimLevel}
                </li>
                <li className="collection-item">
                  <strong>Mileage:</strong> {info.mileage}
                </li>
                <li className="collection-item">
                  <strong>Engine:</strong> {info.engine}
                </li>
                <li className="collection-item">
                  <strong>Transmission:</strong> {info.transmission}
                </li>
                <li className="collection-item">
                  <strong>Seller Notes:</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </li>
              </ul>
            </div>
            <div
              style={{
                marginLeft: "15%",
                marginRight: "15%",
                marginBottom: "10px"
              }}
            >
              <h3>Ask us about this car!</h3>
              <form method="POST" action="send-car">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeHolder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeHolder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    placeHolder="Phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeHolder="Message"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="hidden"
                    name="car"
                    value={carName}
                  />
                </div>
                <button className="btn submit-email" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <Footer />
          </div>
        );
      });
      this.setState({ cardPage });
    };
    request();
  }

  render() {
    return (
      <div style={{ backgroundColor: "#e7e7e7" }}>
        <Header />
        <div>{this.state.cardPage}</div>
      </div>
    );
  }
}

export default Card;
