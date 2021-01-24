import React, { Component } from 'react'

 class ShoeForm extends Component {
    render() {
        return (
          <div>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
            <br></br> <br></br>
            <form>
              Name:
              <input type="text" />
              <br></br>
              Image:
              <input type="text" />
              <br></br>
              Description:
              <input type="text" />
              <br></br>
              <input type="submit" value="submit" />
            </form>
          </div>
        );
    }
}


export default ShoeForm;
