import { useState } from 'react';
import style from './Form.module.css';
import axios from 'axios';

const Form = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    image:'',
    dishSummary:'',
    healthScore: '',
    instructions: [],
    diets:[],

  });

  const [errors, setErrors] = useState({
    name: '',
    image:'',
    dishSummary:'',
    healthScore:'',
    instructions:'',
    diets:'',
    enable:true,
  });

  const validate= async (state, property)=>{
       
        const numberRegex = /^[0-9]+$/;
        const nameRegex = /^[A-Za-z\s]+$/ //validate for name
       const validImage= /^(data:image\/(png|jpeg|jpg|gif|bmp);base64,)/; //validate por image

        switch (property) {
          case 'name':
            if(state.name.trim()===''){
              await setErrors({...errors, name: 'Requerido',enable:false});
            }
            else{
              if (!nameRegex.test(state.name)) {
              
                await setErrors({...errors, name: 'Solo letras',enable:false});
              }else{
                await  setErrors({...errors, name:'',enable:true})
                
              }
            }
            break;
          case 'healthScore':
            if (state.healthScore.trim()==='') {
              await setErrors({...errors, healthScore:'Ingrese puntaje', enable:false})
            } else {
              
              if (!numberRegex.test(state.healthScore)) {
                await setErrors({...errors, healthScore:'Solo numeros',enable:false})
                } else {
                      if(state.healthScore<1 || state.healthScore>100)
                      {
                        await setErrors({...errors, healthScore:'Debe ser entre 1 y 100', enable:false})
                      }
                      else
                      {
                            await setErrors({...errors, healthScore:'',enable:true})
                      }
                }
              }
              break

          case 'dishSummary':

              if(state.dishSummary.trim()===''){
                await setErrors({...errors, dishSummary: 'Agregue una descripción',enable:false})
              }
              else{
                await setErrors({...errors, dishSummary: '',enable:true})
              }
              break
          case 'instructions':

              if(state.instructions.includes('') || recipeData.instructions.includes('')|| recipeData.instructions.length===0)
              {
                await setErrors({...errors, instructions:'Complete las instrucciones', enable:false})
              }
              else{
                await setErrors({...errors, instructions: '',enable:true})
              }
              break
          
          case 'diets':
            if(state.diets.length===0)
            {
              await setErrors({...errors, diets:'Seleccione una o mas', enable:false})
            }
            else{
              await setErrors({...errors, diets: '',enable:true})
            }
            break
          case 'image':
            if(!validImage.test(state.image)){
              
              await setErrors({...errors, image:'Seleccione una imagen valida', enable:false}) // La extensión no es válida
          }
          else{
            await setErrors({...errors, image: '',enable:true})

          }
        
            break

          default:
            break;
        }

    
      }
      
      console.log(recipeData)
      console.log(errors)

  const handleInputChange=(e)=>
  { 
    const property= e.target.name
    const value= e.target.value

    validate({...recipeData,[property]:value},property)
    setRecipeData({...recipeData,[property]:value})
  }

  const handleImageChange=(e)=>{
    const file= e.target.files[0]; //obtiene el archivo seleccionado
    if(file){
      const reader= new FileReader();
      
      reader.onload=(e)=>{
        const imageUrl= e.target.result;

        validate({...recipeData, image:imageUrl},'image')
    
        setRecipeData({ //carga en el estado
          ...recipeData,
          image:imageUrl
        })
      }
      reader.readAsDataURL(file); //Lee el archico como una url de datos
    }
  }
  
  const handleInstructionChange = (index, value) => {

    
    const updatedInstructions = [...recipeData.instructions]; //tomo una copia de las instrucciones
    
    updatedInstructions[index] = value; //cargo la modificacion en base al input que se modifico
    
    validate({...recipeData, instructions: updatedInstructions},'instructions')
    setRecipeData({...recipeData,
      instructions: updatedInstructions}); //actualizo el estado
  };
  
  const handleAddInstruction = () => {// le carga un espacio vacio a instruction para luego renderizarlo
    const arrayInstructions=[...recipeData.instructions, '']
    setRecipeData({
        ...recipeData,
        instructions: arrayInstructions
    })
  };

  const handleRemoveInstruction = (index) => { //elimina el ultimo espacio de instruccion
    const arrayInstructions=[...recipeData.instructions] 

    arrayInstructions.splice(index, 1); //elimino la posicion

      setRecipeData({
        ...recipeData,
        instructions: arrayInstructions
    })
  };

  const handleDiets =(e)=>{
    const {value, checked}=e.target
    
    if(!checked){
      const arrayDiets=[...recipeData.diets.filter((diet=>diet !==value))]
      validate({...recipeData, diets:arrayDiets},'diets')
      setRecipeData({
        ...recipeData,
        diets:arrayDiets
      })
     
    }
    else{
      const arrayDiets= [...recipeData.diets, value]

      validate({...recipeData, diets: arrayDiets},'diets')
       setRecipeData({
        ...recipeData,
        diets: arrayDiets,
      })
    }
  
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3001/recipes`, recipeData)
    .then(res=>alert(res))
    .catch(err=>alert(err))
  };

  
  return (
    <div className={style.container}>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.nameScoreContainer}>
          <label htmlFor="recipeName" className={style.labelName}>Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            name="name"
            value={recipeData.name}
            className={style.inputName}
            onChange={handleInputChange}
            required
          />
          {errors.name && <span>{errors.name}</span>}
          <label htmlFor="healthScore" className={style.labelScore}>Health score</label>
          <input
            type="text"
            id="healthScore"
            name='healthScore'
            className={style.inputScore}
            value={recipeData.healthScore}
            onChange={handleInputChange}
            required
          />
          {errors.healthScore && <span>{errors.healthScore}</span>}

        </div>
        <div className={style.imageSummaryContainer}>
          <div className={style.imageContainer}>
            <h5 className={style.imageTitle}>Image</h5>
            {recipeData.image &&(<img src={recipeData.image} alt=" "  className={style.img}  required/>)} {/*renderiza la imagen*/}
            <input type='file' accept='image/*' onChange={handleImageChange} className={style.inputImg}/> {/*para cargar la imagen*/}
            {errors.image && <span>{errors.image}</span>}

          </div>
          <div className={style.summaryContainer}>
            <h5 className={style.summaryTitle}>Dish summary</h5>
            <textarea name='dishSummary' value={recipeData.dishSummary} onChange={handleInputChange} rows={3} className={style.areaText} 
             required> </textarea>
             {errors.dishSummary && <span>{errors.dishSummary}</span>}
          </div>
        </div>
        <div className={style.instructionsDietsContainer}>
            <div className={style.instructionsContainer}>
              <h5>Instructions</h5>
              {recipeData.instructions.map((instruction, index) => (
                <div key={index} id={index} className={style.instructionsRow}>
                  <input className={style.inputInstructions}
                    type="text"
                    value={instruction}
                    onChange={(e) => handleInstructionChange(index, e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => handleRemoveInstruction(index)} className={style.btnRemove}> Remove </button>
                </div>
              ))}
              {errors.instructions && <span>{errors.instructions}</span>}
              <button type="button" onClick={handleAddInstruction} className={style.btnAdd}> Add </button>
        </div>
        <div className={style.dietsContainer}>
          <h5 className={style.dietsTitle} >Select Diets</h5>
          {/* {errors.diets && <span>{errors.diets}</span>} */}
          <span>{errors.diets}</span>
          <div className={style.listContainer} >
          <ul id='typeOfDiets' className={style.listDiets}   >
            <li >
               <input type='checkbox' name='dairyFree' value='dairy free' checked={recipeData.diets.includes('dairy free')} onChange={handleDiets} />
               Dairy free
            </li>
            <li>
              <input type='checkbox' name='fodmap friendly' value='fodmap friendly' checked={recipeData.diets.includes('fodmap friendly')} onChange={handleDiets}/>
              Fodmap friendly
            </li>
            <li>
                <input type='checkbox' name='gluten free' value='gluten free' checked={recipeData.diets.includes('gluten free')} onChange={handleDiets}/>
                Gluten free
            </li>
            <li>
              <input type='checkbox' name='ketogenic' value='ketogenic' checked={(recipeData.diets.includes('ketogenic'))} onChange={handleDiets}/>
              Ketogenic
            </li>
            <li>
              <input type='checkbox' name='lacto ovo Vegetarian' value='lacto ovo vegetarian' checked={recipeData.diets.includes('lacto ovo vegetarian')} onChange={handleDiets}/>
              Lacto ovo vegetarian
            </li>
            <li>
              <input type='checkbox' name='paleolithic' value='paleolithic' checked={recipeData.diets.includes('paleolithic')} onChange={handleDiets}/>
              Paleolithic
            </li>
            <li>
              <input type='checkbox' name='pescatarian' value='pescatarian' checked={recipeData.diets.includes('pescatarian')} onChange={handleDiets}/>
              Pescatarian
            </li>
            <li>
              <input type='checkbox' name='primal' value='primal' checked={recipeData.diets.includes('primal')} onChange={handleDiets}/>
              Primal
            </li>
            <li>
              <input type='checkbox' name='vegan' value='vegan' checked={recipeData.diets.includes('vegan')} onChange={handleDiets}/>
              Vegan
            </li>
            <li>
              <input type='checkbox' name='vegetarian' value='vegetarian' checked={recipeData.diets.includes('vegetarian')} onChange={handleDiets}/>
              Vegetarian
            </li>
            <li>
              <input type='checkbox' name='whole 30' value='whole 30' checked={recipeData.diets.includes('whole 30')} onChange={handleDiets}/>
              Whole 30
            </li>
          </ul>
          </div>
        </div>
       </div>
        <button type="submit" disabled={!recipeData.enable} className={style.createButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;