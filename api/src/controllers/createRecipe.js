const {Diets, Recipe, recipe_diets}= require ('../db')

    
const createRecipe= async (name,image, dishSummary, healthScore, instructions, diets)=>{
    
        const existRecipe= await Recipe.findOne({where:{name:name}})
  
            if(existRecipe === null){
                const newRecipe=await Recipe.create({name,image, dishSummary, healthScore, instructions})
            
                diets.map (async dietName => {
                    const diet= await Diets.findOne({where: {name:dietName}})
                    if(diet){
                    await recipe_diets.create({ recipeId: newRecipe.id, dietId: diet.id })
                    }
                });
                return newRecipe;
            }
            else{
                throw Error ('The recipe exists')
            }   
}

module.exports={createRecipe}