import { useDispatch } from 'react-redux'
import style from './OrderBar.module.css'
import { filterDiets, filterSource} from '../../redux/actions'
import { useState } from 'react'


const FilterBar=()=>{
    // const arrayFilter=["dairy free", "fodmap friendly", "gluten free", "ketogenic", "lacto ovo vegetarian","paleolithic", "pescatarian", "primal", "vegan", "vegetarian", "whole 30"]

    const dispatch=useDispatch()
    const [options, setOptions]=useState([])

    const handleSource= (e)=>{

            dispatch(filterSource(e.target.value))
    }

    const handleDiets =(e)=>{

        const updatedOptions=[...options, e.target.value]

        setOptions(updatedOptions)

        dispatch(filterDiets(updatedOptions))

    }

    return(
        <div className={style.filterContainer}>
            <select className={style.orders} onChange={handleSource}>
                <option className={style.option} value="API">API</option>
                <option className={style.option} value="DB">DB</option>
            </select>
            <select className={style.orders} onChange={handleDiets}>
                <option className={style.option} value="dairy free">Dairy free</option>
                <option className={style.option} value="fodmap friendly">Fodmap friendly</option>
                <option className={style.option} value="gluten free">Gluten free</option>
                <option className={style.option} value="ketogenic">Ketogenic</option>
                <option className={style.option} value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                <option className={style.option} value="paleolithic">Paleolithic</option>
                <option className={style.option} value="pescatarian">Pescatarian</option>
                <option className={style.option} value="primal">Primal</option>
                <option className={style.option} value="vegan">Vegan</option>
                <option className={style.option} value="vegetarian">Vegetarian</option>
                <option className={style.option} value="whole 30">Whole 30</option>
            </select>
        </div>
    )
}

export default FilterBar