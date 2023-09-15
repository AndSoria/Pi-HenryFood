import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';




const CardsContainer = () =>{

    const dispatch= useDispatch();
    const stateGlobal = useSelector((state) => state);
    const render=useSelector(state=>state.render)

    let recipes=[];
    
    if (typeof stateGlobal[render] === 'object' && stateGlobal[render].recipesOfFilter)
    {
        recipes = stateGlobal[render].recipesOfFilter;
    } 
    else 
    {
        if (Array.isArray(stateGlobal[render])) 
        {
            recipes = stateGlobal[render];
        }
    }

    //paginacion
    const [page, setPage]=useState(1); //numero de pagina
    const perPage=9; //cantidad de recetas por pagina
    const maxPages= Math.ceil(recipes?.length / perPage); //cantidad de paginas que vamos a tener
    const from= (page-1) * perPage; //variable para indicar desde que elemento se va a realizar el slice del array
    const until=from + perPage; //variable para indicar hasta que elemento se va a realizar el slice del array

    

    useEffect(()=>{
           
        if(render==='recipes'){
            
            dispatch(getRecipes())
        }
            
        
    },[render])
    
    return (
        <div className={style.container}>
            <Pagination page={page} setPage={setPage} maxPages={maxPages}/>
            <div className={style.cards}>
                {
                recipes.slice(from, until).map((recipe)=>{
                    return <Card 
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diets={recipe.diets}
                        created={recipe.created}
                        healthScore={recipe.healthScore}
                        ></Card>
                })}
            </div>
        </div>
    )
}

export default CardsContainer