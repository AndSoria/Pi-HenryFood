import { useState } from 'react';
import { useDispatch} from 'react-redux';
import style from './Form.module.css';
import { createRecipe } from '../../redux/actions';

const Form = () => {

  const dispatch= useDispatch();

  const [recipeData, setRecipeData] = useState({
    name: '',
    image:'',
    dishSummary:'',
    healthScore: 0,
    instructions: [],
    diets:[]
  });

  const handleInputChange=(e)=>
  {
    const {name, value}= e.target
    setRecipeData({
      ...recipeData,
      [name]:value
    })
  }

  const handleImageChange=(e)=>{
    const file= e.target.files[0]; //obtiene el archivo seleccionado
    if(file){
      const reader= new FileReader();
      
      reader.onload=(e)=>{
        const imageUrl=e.target.result;
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

    if(checked){
      const arrayDiets=recipeData.diets.filter((diet=>diet !==value))
      setRecipeData({
        ...recipeData,
        diets:arrayDiets
      })
    }
    else{
      const arrayDiets= [...recipeData.diets, value]
      setRecipeData({
        ...recipeData,
        diets: arrayDiets,
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRecipe(recipeData))
    // Aquí puedes manejar la lógica para crear la receta con los datos del formulario
  };

  return (
    <div className={style.container}>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="recipeName" className={style.labelName}>Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            name='name'
            value={recipeData.name}
            className={style.inputName}
            onChange={handleInputChange}
          />
          <label htmlFor="healthScore" className={style.labelScore}>Health score</label>
          <input
            type="text"
            id="healthScore"
            name='healthScore'
            className={style.inputScore}
            value={recipeData.healthScore}
            onChange={handleInputChange}
          />

        </div>
        <div className={style.imageSummaryContainer}>
          <div className={style.imageContainer}>
            <h5 className={style.imageTitle}>Image</h5>
            {recipeData.image &&(<img src={recipeData.image} alt=" "  className={style.img}/>)} {/*renderiza la imagen*/}
            <input type='file' accept='image/*' onChange={handleImageChange} className={style.inputImg}/> {/*para cargar la imagen*/}
          </div>
          <div className={style.summaryContainer}>
            <h5 className={style.summaryTitle}>Dish summary</h5>
            <textarea name='dishSummary' value={recipeData.dishSummary} onChange={handleInputChange} rows={3} className={style.areaText}> </textarea>
          </div>
        </div>
        <div className={style.instructionsDietsContainer}>
            <div className={style.instructionsContainer}>
              <h5>Instructions</h5>
              {recipeData.instructions.map((instruction, index) => (
                <div key={index} className={style.instructionsRow}>
                  <input className={style.inputInstructions}
                    type="text"
                    value={instruction}
                    onChange={(e) => handleInstructionChange(index, e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => handleRemoveInstruction(index)} className={style.btnRemove}> Remove </button>
                </div>
              ))}
              <button type="button" onClick={handleAddInstruction} className={style.btnAdd}> Add </button>
        </div>
        <div className={style.dietsContainer}>
          <h5 className={style.dietsTitle} >Select Diets</h5>
          <div className={style.listContainer} >
          <ul id='typeOfDiets' className={style.listDiets}>
            <li>
               <input type='checkbox' name='dairyFree' value='dairy free' checked={recipeData.diets.includes('dairy free')} onChange={handleDiets}/>
               Dairy free
            </li>
            <li>
              <input type='checkbox' name='fodmapFriendly' value='fodmap friendly' checked={recipeData.diets.includes('fodmap friendly')}/>
              Fodmap friendly
            </li>
            <li>
                <input type='checkbox' name='glutenFree' value='gluten free' checked={recipeData.diets.includes('gluten free')}/>
                Gluten free
            </li>
            <li>
              <input type='checkbox' name='ketogenic' value='ketogenic' checked={recipeData.diets.includes('ketogenic')}/>
              Ketogenic
            </li>
            <li>
              <input type='checkbox' name='lactoOvoVegetarian' value='lacto ovo vegetarian' checked={recipeData.diets.includes('lacto ovo vegetarian')}/>
              Lacto ovo vegetarian
            </li>
            <li>
              <input type='checkbox' name='paleolithic' value='paleolithic' checked={recipeData.diets.includes('paleolithic')}/>
              Paleolithic
            </li>
            <li>
              <input type='checkbox' name='pescatarian' value='pescatarian' checked={recipeData.diets.includes('pescatarian')}/>
              Pescatarian
            </li>
            <li>
              <input type='checkbox' name='primal' value='primal' checked={recipeData.diets.includes('primal')}/>
              Primal
            </li>
            <li>
              <input type='checkbox' name='vegan' value='vegan' checked={recipeData.diets.includes('vegan')}/>
              Vegan
            </li>
            <li>
              <input type='checkbox' name='vegetarian' value='vegetarian' checked={recipeData.diets.includes('vegetarian')}/>
              Vegetarian
            </li>
            <li>
              <input type='checkbox' name='whole30' value='whole 30' checked={recipeData.diets.includes('whole 30')}/>
              Whole 30
            </li>
          </ul>
          </div>
        </div>




        </div>
        

       
        <button type="submit" className={style.createButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;