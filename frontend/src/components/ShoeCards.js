import React from "react";



export default function ShoeCards(props){

const {name, size, price} = props 


return(

 <div>
 <h3> {name} </h3>
 <p> {size} </p>
 <p><b>${price}</b> </p>


</div>
   )






}