import React from "react";
import { useSelector } from "react-redux";
import CarComponent from "./CarComponent";

const CarListing = () => {
    const cars = useSelector((state) => state.allcars.cars)
    console.log(cars)
    return(
        <>
        <h1>Car listing</h1>
        <CarComponent/>
        </>
    )
}

export default CarListing