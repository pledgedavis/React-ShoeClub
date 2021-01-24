import React, { Component } from "react";
import { connect } from "react-redux";
import { addShoe } from "../store/actions/shoesAction";

class ShoeForm extends Component {
  state = {
    name: "",
    image: "",
    description: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const shoe = {
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
    };

    this.props.addShoe(shoe);

    this.setState({
      name: "",
      image: "",
      description: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
        <br></br>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br></br>
          Image:
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br></br>
          Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addShoe })(ShoeForm);
// export default ShoeForm;
