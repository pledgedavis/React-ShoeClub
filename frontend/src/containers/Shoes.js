import React from "react";
import ShoeList from "../components/ShoeList";
import ShoeForm from "../components/ShoeForm";
import CommentForm from "../components/CommentForm";

export default function Shoes() {
  return (
    <div>
      All Shoes
      <ShoeList />
      <ShoeForm />
    </div>
  );
}
