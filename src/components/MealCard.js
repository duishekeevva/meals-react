const MealCard= ({meal})=> {
    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h5>{meal?.strMeal}</h5>
            <p>{meal?.strCategory}</p>
        </div>
    )
}

export default MealCard;