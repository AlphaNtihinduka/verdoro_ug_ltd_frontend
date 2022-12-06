import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CarComponent from "./CarComponent";
import { setCars } from "../redux/actions/carActions";
import { useDispatch } from "react-redux";


const CarListing = () => {
    const cars = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchdata = async () => {
        const response = await axios
        .get("http://127.0.0.1:5000/cars")
        .catch((err) => {
            console.log("error: ", err)
        });
        dispatch(setCars(response.data))
    }

    useEffect(() => {
        fetchdata()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
console.log("cars API", cars)
    return(
        <>
        <h1>Car listing</h1>
        <CarComponent/>
        </>
    )
}

export default CarListing