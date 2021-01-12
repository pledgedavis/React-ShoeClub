import React, {useEffect} from 'react'
import ShoeCards from "./ShoeCards";
import {getShoes} from '../store/actions/shoesAction'
import {useSelector, useDispatch } from 'react-redux'


export default function ShoeList() {
const dispatch = useDispatch()
const shoeList = useSelector(state => state.getShoeListFromReducer)

const {loading, shoes, error } = shoeList
console.log(loading, shoes, "loading things here")
useEffect(() => {
    dispatch(getShoes()) 
}, [dispatch])

    return (
        <div>
            Shoe List

             
          {shoes}


        </div>
    )
}
