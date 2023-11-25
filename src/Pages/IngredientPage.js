import {useEffect, useState} from "react";
import axios from "axios";
import MealList from "../components/MealList";
import {useParams} from "react-router-dom";

const IngredientPage=()=>{
    const {name}=useParams()
    const [ingredient,setIngredient]=useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data})=>{
                setIngredient(data.meals)
            })
    }, [])

    return (
        <div>
            <MealList meals={ingredient}/>
        </div>
    )
}

export default IngredientPage;