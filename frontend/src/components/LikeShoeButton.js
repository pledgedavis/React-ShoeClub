import React, { useState, Component } from "react";

// function LikeShoeButton() {
//   const [count, setCount] = useState(0);

//   return (
// <>
//   <button onClick={() => setCount(count + 1)}>
//     Like!
//   </button>
//   <p>{count}</p>
// </>
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
        <p>{count}</p>
      </>
    );
  }
}

export default LikeShoeButton;
