import React, { useState, useEffect } from "react";
import { getShoeList } from "../store/actions/shoesAction";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
import ShowShoe from "./LikeShoeButton";

export default function ShoeList() {
  const dispatch = useDispatch();
  const [sorted, setSorted] = useState(false);

  // used to dispatch actions to the store
  //const [count, setCount] = useState(0);
  const shoeList = useSelector((state) => state.shoeList);
  // used to access the shoelists state
  // debugger
  const { shoes } = shoeList;

  useEffect(() => {
    dispatch(getShoeList());
  }, [dispatch]);

  const sortedShoes = [...shoes].sort(function (a, b) {
    console.log("Name atribute ", a);
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  console.log(" SORTED SHOES ", sortedShoes);

  function nowSorted() {
    setSorted(!sorted);
  }

  // debugger;
  const showShoes = (sorted ? sortedShoes : shoes).map((shoe) => {
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

  console.log("Array of OBjects", showShoes);

  return (
    <div>
      <h4> {showShoes} </h4>
      <br></br> <br></br> <br></br>
      <button onClick={nowSorted}>Sort</button>
    </div>
  );
}
