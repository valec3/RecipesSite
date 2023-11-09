import { useState,useEffect } from 'react';
import {BsSearch} from 'react-icons/bs'
import { fetchData } from '../services/service';

const RecipesList = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [searchedTerm, setSearchedTerm] = useState('');
    const [query, setQuery] = useState('');

    // function to handle the search input
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchData(query);
            console.log(data);
            setRecipes(data);
        }
        getRecipes();
    },[query]);

    const handleSearch = (e) => {
        setSearchedTerm(e.target.value);
    }
    const handleSubmitSearch = () => {
        setQuery(searchedTerm);
    }
    return (
        <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className={`input-wrapper ${isFocused ? 'active' :''}`} >
                <input type="text" placeholder='Search' onFocus={handleFocus}
        onBlur={handleBlur} onChange={handleSearch}/>
                <button onClick={handleSubmitSearch}><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
            {
                recipes.length > 0 ?
                recipes.map((item,i) => {
                    return (
                        <div className='flexItem' key={i+item?.recipe.label}>
                            <div className='img-wrapper'>
                                <img src={item?.recipe.image} alt={item?.recipe.label} />
                            </div>
                            <p>{item.recipe.label}</p>
                        </div>
                    )
                })
                : <p>No recipes found</p>
            }
        </div>
    </div>
    )
}

export default RecipesList