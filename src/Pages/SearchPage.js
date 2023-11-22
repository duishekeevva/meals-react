import Header from "../components/Header";
import {useState} from "react";
import axios from "axios";
import MealList from "../components/MealList";

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState('')

    const [search, setSearch] = useState([])

    const handleChange=(e)=> {
        setSearchInput(e.target.value)
    }
    const handleSubmit = ()=> {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then(({data})=> setSearch(data.meals))
    }
return (
    <div>
        <Header/>
        <div className={'container'}>
            <h1 style={{marginTop:'30px'}}>Search page</h1>
            <div className={'search-wrapper'}>
                <input className={'searchInput'} onChange={handleChange} type="text" placeholder={'Search...'}/>
                <button className={'searchBtn'} onClick={handleSubmit}>Search</button>
            </div>
            <MealList meals={search}/>
        </div>
    </div>
)
}

export default SearchPage;