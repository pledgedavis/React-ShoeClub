import React, { useState, useEffect } from "react";
import { getSingleShoe } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../store/actions/commentsAction.js";

export default function ShoePage({ location }) {
  const [description, setDescription] = useState("");
  const [showComments, setShowComments] = useState([]);
  // functions to update the state
  const shoeSelected = useSelector((state) => state.shoeList.shoe);
  // the above function updates this part of the state ^
  const dispatch = useDispatch();

  //console.log("one shoe?", location?.shoe);
  let comments;
  //let showComments;

  useEffect(() => {
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
    }
  }, [shoeSelected]);
  // dependency array so useEffect can keep track of the functions objects/variables

  if (!location.shoe) {
    return <h1> No shoe selected</h1>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      description,
      shoe_id: location.shoe.id,
    };
    console.log("dispatching comments action");
    dispatch(addComment(newComment));
  };

  console.log("single shoe from state", shoeSelected);

  return (
    <div >
      <h1> Comment Page </h1>
      <h4> Leave your comments below</h4>
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
