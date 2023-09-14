const clearResponse = (response)=>{

    if(response.length>=1){
        const allRecipes=response.map(recipe => {
            // Actualiza las dietas según las condiciones
            if (recipe.vegetarian === true && !recipe.diets.includes('vegetarian')) {
              recipe.diets.push('vegetarian');
            }
            if (recipe.vegan === true && !recipe.diets.includes('vegan')) {
              recipe.diets.push('vegan');
            }
            if (recipe.glutenFree === true && !recipe.diets.includes('gluten free')) {
              recipe.diets.push('gluten free');
            }
      
            const steps = recipe.analyzedInstructions[0]?.steps?.map(step => {
              return { number: step.number, step: step.step };
            });
      
            return {
              id: recipe.id,
              name: recipe.title,
              image: recipe.image,
              dishSummary: recipe.summary,
              healthScore: recipe.healthScore,
              instructions: steps,
              diets: recipe.diets,
              created: false,
            };
    
        });
    
        return allRecipes
    }
    
}

module.exports= clearResponse;