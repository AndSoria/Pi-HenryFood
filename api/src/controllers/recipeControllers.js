const { Op } = require('sequelize');
const  axios = require('axios');
const {Recipe, Diets, recipe_diets}=require('../db');
const { searchApi } = require('./searchApiController');
const { searchDb } = require('./searchDbController');
const clearResponse = require('./clearResponse');
const { APY_KEY} = process.env;



 
 
 const getAllRecipes = async () => {
        try {
          const recipesApi = await searchApi() ;
          const recipesDb = await searchDb();
          
		  const allRecipesApi= await clearResponse(recipesApi);
          
          //   const allRecipesApi = recipesApi.map(recipe => {
              //     // Actualiza las dietas según las condiciones
              //     if (recipe.vegetarian === true && !recipe.diets.includes('vegetarian')) {
                  //       recipe.diets.push('vegetarian');
                  //     }
                  //     if (recipe.vegan === true && !recipe.diets.includes('vegan')) {
        //       recipe.diets.push('vegan');
        //     }
        //     if (recipe.glutenFree === true && !recipe.diets.includes('gluten free')) {
            //       recipe.diets.push('gluten free');
        //     }
      
        //     const steps = recipe.analyzedInstructions[0]?.steps?.map(step => {
        //       return { number: step.number, step: step.step };
        //     });
        
        //     return {
            //       id: recipe.id,
            //       name: recipe.title,
            //       image: recipe.image,
            //       dishSummary: recipe.summary,
            //       healthScore: recipe.healthScore,
            //       instructions: steps,
            //       diets: recipe.diets,
            //       created: false,
            //     };
            
            // });
            
            const allRecipes = [...allRecipesApi, ...recipesDb];
            
            return allRecipes;
            // return arrayPruebaApi //retorno de prueba
        } catch (error) {
            console.error(`Error: ${error.message}`);
            throw new Error(`The recipes were not found`);
        }
    };
    
    //* endpoint a utilizar: https://api.spoonacular.com/recipes/{id}/information , debemos agregarle la auntentificacion
    
    const getRecipeByIdApi= async(id)=>{
        
    try {
        
        const recipe= await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APY_KEY}`).then(({data})=>data)
    
        // const steps = recipe.analyzedInstructions[0]?.steps?.map(step => {
        //     return step.step ;
        //   });

		  const recipeFound= await clearResponse(recipe)
        //   const recipeFound ={
            
        //     id:recipe.id,
        //     name: recipe.title,
        //     image: recipe.image,
        //     dishSummary: recipe.summary, 
        //     healthScore: recipe.healthScore, 
        //     instructions: steps,
        //     diets: recipe.diets,
        //     vegetarian: recipe.vegetarian,
        //     vegan:recipe.vegan,
        //     glutenFree:recipe.glutenFree,
        //     created: false,
        // }
        //     recipeFound.vegetarian===true && !recipeFound.diets.includes('vegetarian') && recipeFound.diets.push ('vegetarian')
        //     recipeFound.vegan===true && !recipeFound.diets.includes('vegan') && recipeFound.diets.push ('vegan')
        //     recipeFound.glutenFree===true && !recipeFound.diets.includes('gluten free') && recipeFound.diets.push ('gluten free')
            
            if(recipeFound){
                return recipeFound
            }

            // const filterId=arrayPruebaApi.find(recipe=>recipe.id===id)
            // return filterId;
            
    } catch (error) {

        throw alert (`The recipe with id: ${id} was not found`)
    }
 
}
        
        

//* aca vampos a buscar una receta por Id en la database

const getRecipeByIdBdd=async (id)=>{

    const recipeFound= await Recipe.findByPk(id,{
        include:[{
            model: Diets,
            attributes:['name'],
            through: {
                    model: recipe_diets,
                    attributes:[]
                    }
                }]
            }
        )
   
   
    if(recipeFound){

        const cleanArray= recipeFound.diets.map(diet=>diet.name) //toma solo los valores del objeto diets

        const recipeJs= recipeFound.get({plain:true}) //convierte el objeto de sequelize en un objeto de java script plano

        const recipeFiltered={...recipeJs, diets:cleanArray} //copia todas las propiedades del objeto retornado y cambia los valores de la propiedad diets para que sea un array de solo elementos
        
        return recipeFiltered
    }
    else{
        throw Error (`The recipe with id: ${id} was not found`)
    }
}

const getRecipeByName= async (name) =>{
    
    const databaseRecipe= await Recipe.findAll({
        where: { 
            name:{
                [Op.iLike]: `%${name}%`}
           
            },include:[{
                model: Diets,
                attributes:['name'],
                through: {
                        model: recipe_diets,
                        attributes:[]
                        }
                    }]
                }
        )
    
    const result=  await searchApi()
	
    const apiRecipe= result.filter((recipe)=>recipe.title.toLowerCase().includes(name.toLowerCase()))

	const recipeFoundApi= await clearResponse(apiRecipe)	
    // const recipeFoundApi =apiRecipe.map(recipe => {
    //     recipe.vegetarian===true && !recipe.diets.includes('vegetarian') && recipe.diets.push ('vegetarian')
    //     recipe.vegan===true && !recipe.diets.includes('vegan') && recipe.diets.push ('vegan')
    //     recipe.glutenFree===true && !recipe.diets.includes('gluten free') && recipe.diets.push ('gluten free')
        
    //     const steps = recipe.analyzedInstructions[0]?.steps?.map(step => {
    //         return { number: step.number, step: step.step };
    //       });

    //     return{

    //         id:recipe.id,
    //         name: recipe.title,
    //         image: recipe.image,
    //         dishSummary: recipe.summary, 
    //         healthScore: recipe.healthScore, 
    //         instructions: steps,
    //         diets: recipe.diets,
    //         // vegetarian: recipe.vegetarian,
    //         // vegan:recipe.vegan,
    //         // glutenFree:recipe.glutenFree,
    //         created:false,
    // }
    // });
            

    

    const recipeByName= [...databaseRecipe,...recipeFoundApi];
    
    return recipeByName
}

module.exports={
    getRecipeByIdApi,
    getRecipeByIdBdd,
    getRecipeByName,
    getAllRecipes,
};


