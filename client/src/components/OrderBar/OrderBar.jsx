import { useDispatch } from 'react-redux'
import style from './OrderBar.module.css'
import { sortName, sortScore } from '../../redux/actions'


const OrderBar=({orders, setOrders})=>{

    const dispatch=useDispatch()

    const handleOrder=async (e)=>{
       await setOrders((orders)=>[...orders, e.target.value])

       orders.map(order=>{

           if(order==='HIGH_TO_LOW' && !orders.includes('LOW_TO_HIGH')){
               dispatch(sortScore(order))
           }
           else{
                if(order==='LOW_TO_HIGH' && !orders.includes('HIGH_TO_LOW')){
                    dispatch(sortScore(order))
                }
           }

           if(order ==='A' && !orders.includes('D')){
               dispatch(sortName(order))
           }
           else{
                if(order ==='D' && !orders.includes('A')){
                    dispatch(sortName(order))
                }
           }

       })
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