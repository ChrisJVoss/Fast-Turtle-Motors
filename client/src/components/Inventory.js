import React from "react";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";

class Inventory extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      showCard: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderCard = this.renderCard.bind(this);
  }

  handleClick(id) {
    this.setState({
      showCard: true,
      carId: id
    });
  }

  componentDidMount() {
    fetch("/cars")
      .then(res => {
        return res.json();
      })
      .then(cars => {
        this.setState({ cars });
        let carStats = cars.map(stats => {
          return (
            <Col key={stats._id} xs={12} md={6} lg={4}>
              <Thumbnail
                src="https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg"
                alt="242x200">
                <h3>
                  {stats.year} {stats.make} {stats.model} {stats.trimLevel}
                </h3>
                <p>Description</p>
                <div>
                  <Button onClick={() => this.handleClick(stats._id)}>
                    More
                  </Button>
                </div>
              </Thumbnail>
            </Col>
          );
        });
        this.setState({ carStats });
      });
  }

  render() {
    if (this.state.showCard) {
      return this.renderCard();
    }
    return (
      <div className="inventory">
        <h1>Inventory</h1>
        <Grid>
          <Row>{this.state.carStats}</Row>
        </Grid>
      </div>
    );
  }
}

export default Inventory;
