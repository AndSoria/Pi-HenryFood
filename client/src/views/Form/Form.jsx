import React, { useState } from 'react';
import style from './Form.module.css';

const Form = () => {
  const [recipeName, setRecipeName] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [instructions, setInstructions] = useState(['']);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [healthScore, setHealthScore]= useState(0);

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveInstruction = (index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions.splice(index, 1);
    setInstructions(updatedInstructions);
  };

  const handleInstructionChange = (index, value) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = value;
    setInstructions(updatedInstructions);
  };

  const handleDietChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDiets([...selectedDiets, value]);
    } else {
      const updatedDiets = selectedDiets.filter((diet) => diet !== value);
      setSelectedDiets(updatedDiets);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para crear la receta con los datos del formulario
  };

  return (
    <div className={style.container}>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>
        <div className={style.imageSummaryContainer}>
          <div className={style.formGroupImageContainer}>
            <h4>Image</h4>
            {/* Input para la imagen */}
          </div>
          <div className={style.formGroupSummaryContainer}>
            <h4>Dish summary</h4>
            {/* Input para el resumen */}
          </div>
        </div>
        <div className={style.formGroupInstructionsContainer}>
          <h3>Instructions</h3>
          {instructions.map((instruction, index) => (
            <div key={index} className={style.instructionsRow}>
              <input
                type="text"
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e.target.value)}
                required
              />
              <button type="button" onClick={() => handleRemoveInstruction(index)}> Remove </button>
            </div>
          ))}
          <button type="button" onClick={handleAddInstruction}> Add </button>
        </div>

        <div className={style.formGroupDietsContainer}>
          <h3>Select Diets</h3>
          <div className={style.listContainer} >
          <ul id='typeOfDiets' className={style.listDiets}>
            <li>
               <input type='checkbox' name='dairyFree' value='dairy free'/>
               Dairy free
            </li>
            <li>
              <input type='checkbox' name='fodmapFriendly' value='fodmap friendly'/>
              Fodmap friendly
            </li>
            <li>
                <input type='checkbox' name='glutenFree' value='gluten free'/>
                Gluten free
            </li>
            <li>
              <input type='checkbox' name='ketogenic' value='ketogenic'/>
              Ketogenic
            </li>
            <li>
              <input type='checkbox' name='lactoOvoVegetarian' value='lacto ovo vegetarian'/>
              Lacto ovo vegetarian
            </li>
            <li>
              <input type='checkbox' name='paleolithic' value='paleolithic'/>
              Paleolithic
            </li>
            <li>
              <input type='checkbox' name='pescatarian' value='pescatarian'/>
              Pescatarian
            </li>
            <li>
              <input type='checkbox' name='primal' value='primal'/>
              Primal
            </li>
            <li>
              <input type='checkbox' name='vegan' value='vegan'/>
              Vegan
            </li>
            <li>
              <input type='checkbox' name='vegetarian' value='vegetarian'/>
              Vegetarian
            </li>
            <li>
              <input type='checkbox' name='whole30' value='whole 30'/>
              Whole 30
            </li>
          </ul>
          </div>
        </div>
        <button type="submit" className={style.createButton}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;