const {Router}=require('express');
const dietsHandler=require('../Handlers/dietsHandler')

const dietsRouter= Router();

dietsRouter.get('/', dietsHandler)

module.exports=dietsRouter;