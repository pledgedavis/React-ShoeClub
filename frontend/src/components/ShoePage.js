import React, { useState, useEffect } from "react";
// the above hook useState allows me to have state variables
import { getSingleShoe } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../store/actions/commentsAction.js";

export default function ShoePage({ location }) {
  // location is a default prop whos parent is the router
  const [description, setDescription] = useState("");
  const [showComments, setShowComments] = useState([]);
  // functions to update the state
  // debugger;
  const shoeSelected = useSelector((state) => state.shoeList.shoe);
  // the above function updates this part of the state ^
  const dispatch = useDispatch();
  // used to dispatch actions to the store

  //console.log("one shoe?", location?.shoe);
  let comments;
  // debugger;

  useEffect(() => {
    // runs on page load
    if (location.shoe) {
      dispatch(getSingleShoe(location.shoe.id));
    }
  }, [getSingleShoe, dispatch]);

  useEffect(() => {
    console.log("shoes effect?", shoeSelected);
    if (shoeSelected) {
      comments = shoeSelected.comments;
      const updatedComments = comments.map((comment) => {
        const { description, id } = comment;
        return <p key={id}>{description}</p>;
      });
      setShowComments(updatedComments);
      setDescription("");
      // set description clears form after comments are updated
    }
  }, [shoeSelected]);
  // dependency array so useEffect can keep track of the functions objects/variables
  // debugger;

  if (!location.shoe) {
    return <h1> No shoe selected</h1>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      description,
      shoe_id: location.shoe.id,
    };
    // creating a newComment prop so a user is able to create a comment
    console.log("dispatching comments action");
    dispatch(addComment(newComment));
  };

  console.log("single shoe from state", shoeSelected);

  return (
    <div>
      <h1> Comment Page </h1>
      <h4> Leave your comments below</h4>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {showComments}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="comment"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
