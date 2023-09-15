const validate=(req, res, next)=>{

    const {name,image, dishSummary, healthScore, instructions, diets}=req.body
    

    const numberRegex = /^[0-9]+$/;
    const nameRegex = /^[A-Za-z\s]+$/; //validation for name
    const validImage = /^(data:image\/(png|jpeg|jpg|gif|bmp);base64,)/; //validation for image file

    if (!nameRegex.test(name)) return res.status(400).json({error:'The name contain characters invalid'})
    if (name==='') return res.status(400).json({error:'Name is null'})

    if(healthScore<1 || healthScore>100 || !numberRegex.test(healthScore)) return res.status(400).json({error:'The score must be between 1 and 100 '})
    
    if(dishSummary==='')return res.status(400).json({error:'The summary cannot be empty'})
      

    if(instructions.length===0 || instructions.includes('')) return res.status(400),json({error: 'The instructions cannot be empty'})
      
    if(diets.length===0 || diets.includes('')) return res.status(400),json({error: 'The diets cannot be empty'})
   

    if(!validImage.test(image)) return res.status(400).json({error: 'Image file invalid'})
      
    next()

}
