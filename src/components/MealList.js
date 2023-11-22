import MealCard from "./MealCard";

const MealList=({meals})=> {
    return(
        <div className={'row'}>
            {
                meals.map(meal=>
                    <div
                        key={meal.idMeal}
                        className={'col-4'}
                    >
                        <MealCard meal={meal}/>
                    </div>
                )
            }
        </div>
    )
}

export default MealList;