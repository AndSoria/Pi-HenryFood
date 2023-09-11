import { useDispatch} from 'react-redux'
import style from'./SearchBar.module.css'
import { recipeFilterName } from '../../redux/actions';
import { useState } from 'react';



const SearchBar = ()=>{
    const [searchName, setSearchName]=useState(''); //estado local para alcamenar el valor del input
    const dispatch= useDispatch();


    const handleChange=(e)=>{
        setSearchName(e.target.value) //actualiza el valor del estado global
    }

    const handleSearch=async ()=>
    {
        try {
            if (searchName.trim() === '') {
              // Mostrar un mensaje de error o proporcionar retroalimentación al usuario
              throw alert("El campo de búsqueda no puede estar vacío.");
            }
      
            // Llamar a la acción de búsqueda y esperar a que se complete
            await dispatch(recipeFilterName(searchName));
      
            // Limpiar el campo de entrada después de la búsqueda exitosa
            setSearchName('');

          } catch (error) {

            // Manejar errores de búsqueda, por ejemplo, mostrar un mensaje de error al usuario
            throw alert(error.message);
          }
        
    }
    return(
        <div className={style.container}>
        <input type="text" name="text" className={style.input} required="" placeholder="Type name..." value={searchName} onChange={handleChange}/>
        <button type= "button" className={style.buttonSearch} disabled={searchName===''} onClick={handleSearch}>Search</button>
    </div>
    )
}

export default SearchBar