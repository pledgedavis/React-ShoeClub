import React, { useState, Component } from "react";

// function LikeShoeButton() {
//   const [count, setCount] = useState(0);

//   return (
// <div>
//   <button onClick={() => setCount(count + 1)}>
//     Like!
//   </button>
//   <p>{count}</p>
// </div>
//   );
// }

class LikeShoeButton extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Like!
        </button>
        <h2>{count}</h2>
      </>
    );
  }
}

export default LikeShoeButton;
