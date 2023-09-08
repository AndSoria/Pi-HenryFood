const {getArrayDiets}=require('../controllers/dietControllers')

const dietsHandler= async (req, res)=>{

    try {
        // res.send('estoy ejecutando el handler de las dietas')
        const arrayDiets= await getArrayDiets()
        // return arrayDiets;
        res.status(200).json(arrayDiets)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= dietsHandler;