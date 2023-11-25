import {Link} from "react-router-dom";

const Ingredients =({ingredients})=> {
    return (
        <div className={'row'}>
            {
                ingredients.map((ingredient, idx)=>
                <div className={'col-2'} key={idx+ingredient}>
                    <div className={'box'}>
                       <h5>
                           <Link to={`/ingredient/${ingredient}`}>
                               {ingredient}
                           </Link>
                       </h5>
                        <img className={'ingredient-img'}
                             src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=""/>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Ingredients;