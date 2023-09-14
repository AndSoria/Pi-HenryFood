const {Router}= require('express');
const {validate}=require('../middleware/validate')

const {recipeIdHandler, recipeNameHandler, recipePostHandler,allRecipes}= require('../Handlers/recipeHandlers')

const recipeRouter=Router();


recipeRouter.get('/', recipeNameHandler)

recipeRouter.get('/allRecipes', allRecipes)

recipeRouter.get('/:id',recipeIdHandler)

recipeRouter.post('/',validate, recipePostHandler)

module.exports=recipeRouter;