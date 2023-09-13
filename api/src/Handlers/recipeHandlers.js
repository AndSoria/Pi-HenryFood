const { getRecipeByIdApi, getRecipeByIdBdd, getRecipeByName,getAllRecipes}=require('../controllers/recipeControllers')
const {createRecipe}= require('../controllers/createRecipe')

const allRecipes =async(req, res)=>{
    try {
        const recipes= await getAllRecipes();

        res.status(200).json(recipes)
        
    } catch (error) {

        res.status(400).json({error:error.message})
        
    }

}

const recipeIdHandler=async(req, res)=>{
    const {id}= req.params;

    if(isNaN(id)){

        //?se va a realizar la busqueda en la BDD

        try {
            const recipeByIdBdd= await getRecipeByIdBdd(id);

            res.status(200).json(recipeByIdBdd)//verificar el estatus
        } catch (error) {
            console.log(error);
            res.status(400).json({error:error.message})
        }
        

    }
    else{

        //? se va a realizar la busqueda en la API
        try {
            const recipeByIdApi= await getRecipeByIdApi(id);

            res.status(200).json(recipeByIdApi)//verificar el estatus
        } catch (error) {
            res.status(400).json({error:error.message})
        }
       
    }
   
}

//!En esta ruta se hace la busqueda por nombre
const recipeNameHandler= async (req,res)=>{
    const {name}=req.query
    if(name!==undefined){

        const recipe= await getRecipeByName(name);

        res.status(200).json(recipe)
    }
    else{
        return  res.status(401) .json({message:'Debes ingresar un parametro'})
    }
}

const recipePostHandler= async (req,res)=>{
    
    try {
        const arrayRecipe=req.body

        if(Array.isArray(arrayRecipe)){
            arrayRecipe.forEach(async recipe=>{
                const {name,image, dishSummary, healthScore,instructions,diets}= recipe;
                const newRecipe= await createRecipe(name,image, dishSummary, healthScore, instructions, diets)
            })
            
            res.status(201).json('Recipes successfully created')
        }
        else{

            const {name,image, dishSummary, healthScore,instructions,diets}= req.body;
            
            const newRecipe= await createRecipe(name,image, dishSummary, healthScore, instructions, diets)
            res.status(201).json(newRecipe) //"201 corresponds to the state of the object being created."
        }


    } catch (error) {

        res.status(400).json({error:error.message})

    }
}

module.exports={
    recipeIdHandler,
    recipeNameHandler,
    recipePostHandler,
    allRecipes
}