import { all } from 'axios';
import {GET_RECIPES, GET_RECIPE_ID, GET_BY_NAME, FILTER_BY_DIETS, FILTER_BY_SOURCE, SORT_BY_SCORE, SORT_BY_NAME,RESET_FILTERS} from './actions'

const initialState={
    recipes: [],
    recipeId: [],
    recipeFilter:{recipes: [], filtered:false},
    recipeName:[],
    
};



const rootReducer =(state=initialState, action)=>{
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes: action.payload}
        
        case GET_RECIPE_ID:
            return {...state,recipeId: action.payload}

        case GET_BY_NAME:
            return {...state, recipeName: action.payload}
        
        case FILTER_BY_DIETS:
            if(state.recipeFilter.filtered===true){

                const recipesFiltered= state.recipeFilter.recipes.filter(recipe=>recipe.diets.includes(action.payload))
                return {
                    ...state, 
                    recipeFilter:{
                        ...state.recipeFilter,
                        recipeFilter: recipesFiltered
                    }
                }
            }
            else{
                
                    if(state.recipeFilter.filtered===false){
                
                        const recipesFiltered= state.recipes.filter(recipe=>recipe.diets.includes(action.payload))
                        return {
                            ...state,
                                recipeFilter:{
                                    recipes:recipesFiltered,
                                    filtered:true
                            }
                }
            }
        }
        
        case FILTER_BY_SOURCE:
            if(action.payload==='API'){ //for API
                
                if(state.recipeFilter.filtered===true){ //tengo un estado filtrado
                    return {
                        ...state, 
                        recipeFilter:{
                            ...state.recipeFilter,
                            recipesOfFilter: state.recipeFilter.recipesOfFilter.filter(recipe=>recipe.created===false)
                        }
                     }
                 }   
                else{
                    if(state.recipeFilter.filtered===false){ //no tengo un estado filtrado
                        return{
                            ...state,
                            recipeFilter:
                            {
                                recipesOfFilter:state.recipes.filter(recipe=>recipe.created===false),
                                filtered: true
                            }
                        }
                    }
                }
            }
            else{ //for BDD
                if(state.recipeFilter.filtered==='DB'){ //tengo un estado filtrado
                    return {
                        ...state, 
                        recipeFilter:{
                            ...state.recipeFilter,
                            recipesOfFilter: state.recipeFilter.recipesOfFilter.filter(recipe=>recipe.created===true)
                        }
                     }
                 }   
                else{
                    if(state.recipeFilter.filtered===false){ //no tengo un estado filtrado
                        return{
                            ...state,
                            recipeFilter:
                            {
                                recipesOfFilter:state.recipes.filter(recipe=>recipe.created===false),
                                filtered: true
                            }
                        }
                    }
                }
                
            }
        
            case SORT_BY_NAME:
                if(action.payload==='A'){
                    if(state.recipeFilter.filtered===true){ //si tengo un estado filtrado
                        
                        const ordenAscendente= state.recipeFilter.recipesOfFilter.sort((a,b)=>a.name.localCompare(b.name))
                        return{
                            ...state,
                            recipeFilter:{
                                ...state.recipeFilter,
                                recipesOfFilter:ordenAscendente,
                            }
                        }
                    }
                    if(state.recipeFilter.filtered===false){ //si no tengo un estado filtrado
                        const ordenAscendente= state.recipes.sort((a,b)=>a.name.localCompare(b.name))
                        return{
                            ...state,
                            recipeFilter:{
                                recipesOfFilter:ordenAscendente,
                                filtered: true
                            }
                        }
                    }
                }
                
                if(action.payload==='D'){
                    if(state.recipeFilter.filtered===true){
                        
                        const ordenDescendente= state.recipeFilter.recipesOfFilter.sort((a,b)=>b.name.localCompare(a.name))
                        return{
                            ...state,
                            recipeFilter:{
                                ...state.recipeFilter,
                                recipesOfFilter:ordenDescendente,
                            }
                        }
                    }
                    if(state.recipeFilter.filtered===false){
                        const ordenDescendente= state.recipes.sort((a,b)=>b.name.localCompare(a.name))
                        return{
                            ...state,
                            recipeFilter:{
                                recipesOfFilter:ordenDescendente,
                                filtered: true
                            }
                        }
                    }
                }

            case SORT_BY_SCORE:
                if(action.payload==='HIGH_TO_LOW'){
                    if(state.recipeFilter.filtered===true){ //si tengo un estado filtrado
                        
                        const highToLow= state.recipeFilter.recipesOfFilter.sort((a,b)=>a.healthScore - b.healthScore)
                        return{
                            ...state,
                            recipeFilter:{
                                ...state.recipeFilter,
                                recipesOfFilter: highToLow,
                            }
                        }
                    }
                    if(state.recipeFilter.filtered===false){ //si no tengo un estado filtrado
                        const highToLow= state.recipes.sort((a,b)=>a.healthScore - b.healthScore)
                        return{
                            ...state,
                            recipeFilter:{
                                recipesOfFilter:highToLow,
                                filtered: true
                            }
                        }
                    }
                }
                
                if(action.payload==='LOW_TO_HIGH'){
                    if(state.recipeFilter.filtered===true){
                        
                        const lowToHigh= state.recipeFilter.recipesOfFilter.sort((a,b)=>b.healthScore - a.healthScore)
                        return{
                            ...state,
                            recipeFilter:{
                                ...state.recipeFilter,
                                recipesOfFilter:lowToHigh,
                            }
                        }
                    }
                    if(state.recipeFilter.filtered===false){
                        const lowToHigh= state.recipes.sort((a,b)=>b.healthScore - a.healthScore)
                        return{
                            ...state,
                            recipeFilter:{
                                recipesOfFilter:lowToHigh,
                                filtered: true
                            }
                        }
                    }
                }
        
        case RESET_FILTERS:
            return{
                ...state,
                recipeFilter:{
                    recipesOfFilter:[],
                    filtered:false
                }
            }
        default: 
            return {...state};
    }
}

export default rootReducer;
