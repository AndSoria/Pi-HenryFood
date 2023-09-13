const {Diets}=require('../db')
const { APY_KEY} = process.env;
const axios= require('axios')

const endpoint= "https://api.spoonacular.com/recipes/complexSearch"
const information='&addRecipeInformation=true'
const number='&number=100'
// const endpointTotalrecipe="https://api.spoonacular.com/food/search?number=5220&apiKey=7207457fa06e439796419e69c2e7e0e1&addRecipeInformation=true"


const getArrayDiets=async(req, res)=>{

    try {

        const count=await Diets.count();

        if (count > 0) {
    
                throw alert("The database was already loaded")
          
        } else {
            
        
        const result=  await axios.get(`${endpoint}?apiKey=${APY_KEY}${information}${number}`)
                        .then(({data})=>data.results)
        
    
        const resultFiltered= result.map(recipe=>{
            return{
                vegetarian:recipe.vegetarian,
                vegan: recipe.vegan,
                glutenFree:recipe.glutenFree,
                diets:recipe.diets,
            }
        })
    
        const arrayDiets=[]
        const arrayProperties=[]
        
        resultFiltered.forEach(element=>{
            const aux=Object.keys(element)
    
            aux.forEach(prop=>{
                if(!arrayProperties.includes(prop)){
                    arrayProperties.push(prop.toLowerCase());
            }})
    
            element.diets.forEach(diet=>{
                if(!arrayDiets.includes(diet)){
                    arrayDiets.push(diet)
                }
            })
    
        })
        const arrayCompare=[]
        arrayDiets.forEach(element=>{
            arrayCompare.push(element.split(" ").join("").toLowerCase())
        })
        console.log(arrayProperties);
        console.log(arrayCompare);
    
        arrayProperties.forEach(element=>{
            if(!arrayCompare.includes(element)&& element!=="diets"){
                arrayDiets.push(element)
            }
        })
       
        for(const diet of arrayDiets){
        
        await Diets.findOrCreate({
           where:{name:diet},
           
         })
        }
    
            return  arrayDiets 
        }
    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });
        

    }
   
}    
//? This controller places an order to the API, where after receiving the data, it performs filtering, retrieves, and loads the corresponding information for the existing diets."


module.exports={getArrayDiets}
