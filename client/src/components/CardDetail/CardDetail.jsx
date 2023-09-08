import { useEffect } from 'react'
import style from './CardDetail.module.css'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { recipeById } from '../../redux/actions'


const CardDetail = (props)=>{
    
    const index=0;

    const {id, name ,image , diets,created, dishSummary, healthScore,instructions}=props
    return(
        

<div className={style.parent}>
    <div className={style.div1}> </div>
    <div className={style.div2}> </div>
    <div className={style.div3}>
      <img className={style.img} src={image}/>
    </div>
    <div className={style.div4}>

    </div>
    <div className={style.div5}>
        <h2>{name}</h2>
        
    </div>
    <div className={style.div6}>
        <h3>Summary</h3>
        <div className={style.text} dangerouslySetInnerHTML={{ __html: dishSummary }} />
    </div>
    <div className={style.div7}> 
        <ol>
            {
                instructions.map(step=>{
                return (<li key={index+1}>{step}</li>)
            })}

        </ol>
    </div>
        
    <div className={style.div8}>
    </div>
    <div className={style.div9}> </div>
    <div className={style.div10}>
    { 
                diets.map(element => {
                    if(typeof element=== 'object' ){ 
                        return (<h3>{element.name}</h3>)
                    }else{
                        return (<h3>{element}</h3>)
                    }
                })}
    </div>
    <div className={style.div11}> <h3>Health score: {healthScore}</h3></div>
    <div className={style.div12}> <h3>id: {id} </h3> </div>
    <div className={style.div13}>
            { created===false && <h3>API</h3>}
            { created===true && <h3>DDB</h3>}
         </div>
</div>

    )
}

export default CardDetail


// <h4>{id}</h4>
        // <h4>{name}</h4>
        // <div className={style.createdBy}>
        //       { created ? <h4>Dbb</h4> : <h4>Api</h4>}
        // </div>
        // <img src={image}/>