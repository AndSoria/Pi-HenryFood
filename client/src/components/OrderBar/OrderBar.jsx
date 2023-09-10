import { useDispatch } from 'react-redux'
import style from './OrderBar.module.css'
import { sortName, sortScore } from '../../redux/actions'


const OrderBar=()=>{

    const dispatch=useDispatch()

    const handleOrder= (e)=>{
        if(e.target.value==='HIGH_TO_LOW' || e.target.value==='LOW_TO_HIGH'){
            dispatch(sortScore(e.target.value))
        }
        if(e.target.value ==='A' || e.target.value==='D'){
            dispatch(sortName(e.target.value))
        }
    }


    return(
        <div className={style.orderContainer}>
            <select className={style.orders} onChange={handleOrder}></select>
                <option className={style.option} value="HIGH_TO_LOW">Score High to Low</option>
                <option className={style.option} value="LOW_TO_HIGH">Score Low to High</option>
                <option className={style.option} value="A">A-Z</option>
                <option className={style.option} value="D">Z-A</option>
        </div>
    )
}

export default OrderBar