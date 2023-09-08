const endpoint= "https://api.spoonacular.com/recipes/complexSearch"
const number='&number=100'
const information='&addRecipeInformation=true'
const { APY_KEY} = process.env;
const axios= require ('axios')

const searchApi= async ()=>{
    
    const result=  await axios(`${endpoint}?apiKey=${APY_KEY}${information}${number}`).then(({data})=>data.results)
    return result
}

module.exports= {searchApi}