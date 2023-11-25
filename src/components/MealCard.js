import {Link} from "react-router-dom";

const MealCard= ({meal})=> {
    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h5>
                <Link to={`/meal/${meal.idMeal}`}>
                {meal?.strMeal}
                </Link>
            </h5>
            <p>{meal?.strCategory}</p>
        </div>
    )
}

export default MealCard;