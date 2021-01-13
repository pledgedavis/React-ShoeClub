import React, { useState, useEffect } from "react";
import ShoeCards from "./ShoeCards";
import { getSingleShoe } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";

export default function ShoePage({ location }) {
  const [description, setDescription] = useState("");
  const shoe = useSelector((state) => state.shoe);
  const dispatch = useDispatch();

  console.log("one shoe?", location?.shoe);
  let comments;
  let showComments;
  if (location.shoe) {
    comments = location.shoe.comments;

    showComments = comments.map((comment) => {
      const { description, id } = comment;
      return <p key={id}>{description}</p>;
    });
  }

  if (!location.shoe) {
    return <h1> No shoe selected</h1>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSingleShoe(location.shoe.id));
  };

  console.log("single shoe from state", shoe);

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
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
