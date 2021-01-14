import React, { useState, useEffect } from "react";
// import ShoeCards from "./ShoeCards";
import { getSingleShoe } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../store/actions/commentsAction.js";

export default function ShoePage({ location }) {
  const [description, setDescription] = useState("");
  //const [showComments, setShowComments] = useState([]);
  const shoeSelected = useSelector((state) => state.shoeList.shoe);
  const dispatch = useDispatch();
  //

  //console.log("one shoe?", location?.shoe);
  let comments;
  let showComments;

  useEffect(() => {
    if (location.shoe) {
      dispatch(getSingleShoe(location.shoe.id));
    }
  }, [getSingleShoe, dispatch]);

  useEffect(() => {
    console.log("shoes effect?", shoeSelected);
    if (shoeSelected) {
      comments = shoeSelected.comments;
      showComments = comments.map((comment) => {
        const { description, id } = comment;
        return <p key={id}>{description}</p>;
      });
      //setShowComments(updatedComments);
      setDescription("");
    }
  }, [shoeSelected]);
  // dependency array so useEffect can keep track of the functions objects/variables

  // if (location.shoe) {
  //   comments = location.shoe.comments;

  //   showComments = comments.map((comment) => {
  //     const { description, id } = comment;
  //     return <p key={id}>{description}</p>;
  //   });
  // }

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
    <div>
      <h1> Shoe Page </h1>
      {showComments}

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
