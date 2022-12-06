import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { selectedCar } from "../redux/actions/carActions";
import { useDispatch, useSelector } from "react-redux";

const CarDetail = () => {
    const car = useSelector((state) => state.car)
    const {car_id} = useParams()
    const dispatch = useDispatch()

    console.log(car_id)

    const fetchdataDetail = async () => {
        const response = await axios
        .get(`http://127.0.0.1:5000/cars/${car_id}`)
        .catch((err) => {
            console.log("error: ", err)
        });
        dispatch(selectedCar(response.data))
        // console.log(response)
    }

    useEffect(() => {
        fetchdataDetail()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
console.log("cars detail", car)
    return(
        <>
        <div className="image"><img src={car.image} alt="car.name" /></div>
        <h1>{car.name}</h1>
        </>
    )
}

export default CarDetail