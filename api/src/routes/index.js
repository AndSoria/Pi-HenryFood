const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const recipeRouter= require('./RecipeRouter');
const dietsRouter=require('./DietsRouter');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipeRouter);

router.use("/diets",dietsRouter);


module.exports = router;
