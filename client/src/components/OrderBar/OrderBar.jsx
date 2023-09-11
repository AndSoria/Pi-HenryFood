import { useDispatch } from 'react-redux'
import style from './OrderBar.module.css'
import { sortName, sortScore } from '../../redux/actions'

const OrderBar=()=>{

    const dispatch=useDispatch()

    const handleOrder=(e)=>{
        const newOrder=e.target.value
        
            if(newOrder==='HIGH_TO_LOW' || newOrder==='LOW_TO_HIGH' )
            {
                 dispatch(sortScore(newOrder))
            }
            if(newOrder==='A' ||newOrder ==='D' ){
                     dispatch(sortName(newOrder))
            }
        
        }
    
    return(
        <div className={style.orderContainer}>
            <select className={style.orders} onChange={handleOrder}>
                <option disabled selected value="">Order</option>
                <option className={style.option} value="HIGH_TO_LOW">Score High to Low</option>
                <option className={style.option} value="LOW_TO_HIGH">Score Low to High</option>
                <option className={style.option} value="A">A-Z</option>
                <option className={style.option} value="D">Z-A</option>
            </select>
        </div>
    )
}

export default OrderBar