import React, { useEffect } from "react";
import { getShoeList } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
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
        <img className="ShoesImg" src={shoe.image} />
        <h4>{shoe.description}</h4>
        <Link to={{ pathname: "/shoePage", shoe }}>{name}</Link>
      </div>
    );
  });
  console.log("INFO HERE", showShoes);
  return (
    <>
      <h1>Shoe List</h1>

      <h4> {showShoes} </h4>
    </>
  );
}
