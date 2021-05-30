import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <h3 className="title">Card 2</h3>
          <img className="img" src={this.props.img} alt="Artist Image" />
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
