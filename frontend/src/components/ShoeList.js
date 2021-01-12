import React from 'react'
// import { fetchAllShoes } from "./actions/shoesAction";
import ShoeCards from "./ShoeCards";

export default function ShoeList() {
    // const shoes = this.props.shoes.map((shoe, i) =>{
    //    return <li key ={i} >{shoe.name}</li>
    // });

    const shoes = [
        {
        name: "New shoe",
        size: "56",
        price: "234"
    },
        {
        name: "Newer shoe",
        size: "56",
        price: "234"
    },
        {
        name: "Newest shoe",
        size: "56",
        price: "234"
    },
        {
        name: "Newy shoe",
        size: "56",
        price: "234"
    }

]


const shoeList = shoes.map((shoe, i) =>{
    return <ShoeCards key={i} name={shoe.name} size={shoe.size} price={shoe.price}/>
})

    return (
        <div>
            Shoe List

                {shoeList}



        </div>
    )
}
