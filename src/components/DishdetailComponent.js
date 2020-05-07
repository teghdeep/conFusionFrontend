import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Media,
} from "reactstrap";
import { DISHES } from "C:/Users/Deepa Kapoor/REACT PROJECTS/React/confusion/src/shared/dishes";
class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.setState({ dishes: DISHES });
  }

  render() {
    if (this.props.dish != null) {
      const comment = this.props.dish.comments.map((comment) => {
        return (
          <Media>
            <Media body>
              {comment.comment}
              <br />
              <br />
              --{comment.author},
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
              <br />
              <br />
            </Media>
          </Media>
        );
      });

      return (
        <>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            {comment}
          </div>
        </>
      );
    } else return <div></div>;
  }
}

export default Dishdetail;
