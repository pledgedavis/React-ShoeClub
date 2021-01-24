import React, { Component } from "react";
import { connect } from "react-redux";
import { addShoe } from "../store/actions/shoesAction";

class ShoeForm extends Component {
 
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default connect(null, { addShoe })(ShoeForm);
// export default ShoeForm;
