import { useDispatch } from 'react-redux'
import style from './FilterBar.module.css'
import { filterDiets, filterSource} from '../../redux/actions'



const FilterBar=()=>{
    const dispatch=useDispatch()
    
    const handleSource= (e)=>{
        const {value}= e.target

            dispatch(filterSource(value))

    }

    const handleDiets = (e)=>{
        const {value}= e.target
        dispatch(filterDiets(value))
    }

    return(
        <div className={style.filterContainer}>
            <select className={style.orders} onChange={handleSource}>
                <option disabled selected value="">Source</option>
                <option className={style.option} value="API">API</option>
                <option className={style.option} value="DB">DB</option>
            </select>
            <select className={style.orders} onChange={handleDiets}>
                <option disabled selected value="">Type of diets</option>
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