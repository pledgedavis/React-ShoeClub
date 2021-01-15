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
        <hr></hr>
    
        <Link className="ShoesLink" to={{ pathname: "/shoePage", shoe }}>
          {name}
        </Link>
        <h4 className="ShoesD">{shoe.description}</h4>
        <ul className="ShoesList">
          <br></br> <br></br>
          <img className="ShoesImg" src={shoe.image} />
          <br></br>
        </ul>
        <hr></hr>
      </div>
    );
  });
  console.log("INFO HERE", showShoes);
  return (
    <div >
      <h1>Shoe List</h1>
      <h4> {showShoes} </h4>
    </div>
  );
}
