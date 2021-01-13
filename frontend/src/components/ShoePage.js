import React, { useEffect } from "react";
import ShoeCards from "./ShoeCards";
import { getShoes } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";

export default function ShoePage() {
  return (
    <div>
      <p> Shoe Page </p>
    </div>
  );
}
