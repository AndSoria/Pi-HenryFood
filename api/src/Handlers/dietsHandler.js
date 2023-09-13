const {getArrayDiets}=require('../controllers/dietControllers')

const dietsHandler= async (req, res)=>{

    try {
        const arrayDiets= await getArrayDiets()
  
        return res.status(200).json({ message: 'Diet data loaded successfully', arrayDiets });
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= dietsHandler;