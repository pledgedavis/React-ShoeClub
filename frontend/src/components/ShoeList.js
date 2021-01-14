import React, { useEffect } from "react";
import ShoeCards from "./ShoeCards";
import { getShoeList } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
import ShoePage from "./ShoePage";
import { Route, Link } from "react-router-dom";

export default function ShoeList() {
  const dispatch = useDispatch();
  const shoeList = useSelector((state) => state.shoeList);

  const { loading, shoes, error } = shoeList;

  useEffect(() => {
    dispatch(getShoeList());
  }, [dispatch]);

  const showShoes = shoes.map((shoe) => {
    const { name } = shoe;
    return (
      <div key={shoe.id}>
        <Link to={{ pathname: "/shoePage", shoe }}>{name}</Link>
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
