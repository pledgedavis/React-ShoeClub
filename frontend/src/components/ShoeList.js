import React, { useEffect } from "react";
import ShoeCards from "./ShoeCards";
import { getShoes } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
import ShoePage from "./ShoePage";
import { Route, Link } from "react-router-dom";

export default function ShoeList() {
  const dispatch = useDispatch();
  const shoeList = useSelector((state) => state.shoeList);

  const { loading, shoes, error } = shoeList;

  useEffect(() => {
    dispatch(getShoes());
  }, [dispatch]);

  console.log("shoe things here", shoeList);

  const showShoes = shoes.map((shoe) => {
    const { name } = shoe;
    return (
      <div>
        {/* <link to>{name}</link> */}
        <Link to="/shoePage">{name}</Link>
      </div>
    );
  });
  return (
    <>
      <h1>Shoe List</h1>
      {showShoes}
    </>
  );
}
