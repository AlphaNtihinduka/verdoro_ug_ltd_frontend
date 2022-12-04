import React from "react";
import { useSelector } from "react-redux";

const CarComponent = () => {
    const cars = useSelector((state) => state.allcars.cars)
    const carRender = cars.map((car) => {
        const {id, name, image, description} = car
        return(
            <div key={id}>
            <div className="image"><img src={image} alt="name" /></div>  
            <h2>{name}</h2>
            <h4>{description}</h4>
            </div>
        )
    })
    return <div>{carRender}</div>
}

export default CarComponent