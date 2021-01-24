import React, { useState, useEffect } from "react";
import { getShoeList } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
import  ShowShoe  from "./LikeShoeButton";
import ShoeForm from "./ShoeForm";


export default function ShoeList() {
  const dispatch = useDispatch();
  //const [count, setCount] = useState(0);
  // used to dispatch actions to the store
  const shoeList = useSelector((state) => state.shoeList);
  // used to access the shoelists state
  // debugger
  const { loading, shoes, error } = shoeList;

  useEffect(() => {
    dispatch(getShoeList());
  }, [dispatch]);

  // debugger;
  const showShoes = shoes.map((shoe) => {
    // debugger
    console.log("finally showing shoes");
    const { name } = shoe;
    
    return (
      <div key={shoe.id}>
        <hr></hr>

        <Link className="ShoesLink" to={{ pathname: "/shoePage", shoe }}>
          {name}
        </Link>

        <h4 className="ShoesD">{shoe.description}</h4>
       
{/*     
        <button onClick={() => setCount(count + 1)}>
          Adding like to shoe
        </button>
        <p>{count}</p> */}
        <ShowShoe />
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
    <div>
      <h4> {showShoes} </h4>
      <br></br> <br></br> <br></br> 
      <h2>Create a Shoe!</h2>
      <ShoeForm />
    </div>
  );
}
