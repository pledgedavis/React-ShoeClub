import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../store/actions/commentsAction.js";

class CommentForm extends Component {
  state = {
    description: "",
  };

  handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    const comment = { description: this.state.description };
    this.props.addComment(comment);
    this.setState({
      description: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentForm);
