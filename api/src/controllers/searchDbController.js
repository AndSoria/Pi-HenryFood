const {Recipe,Diets, recipe_diets} = require ('../db')

const searchDb =async()=>{

    const recipesDb= await Recipe.findAll({
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
    
    return recipesDb
   
}

module.exports = {searchDb}