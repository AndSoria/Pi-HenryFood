import { useEffect } from 'react'
import style from './CardDetail.module.css'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { recipeById } from '../../redux/actions'


const CardDetail = (props)=>{
    
    const index=0;

    const {id, name ,image , diets,created, dishSummary, healthScore,instructions}=props

    return(

        <div className={style.container}>
                <div className={style.dataLeft}>
                    <div className={style.imageContainer}>

                    <img  src={image}/>
                    </div>

                    <div className={style.id}>
                        <h4>Id: {id} </h4>
                    </div>

                    <div className={style.healthScore}>

                        <h4>Health score: {healthScore}</h4>

                    </div>
                <div className={style.source}>

                    { created ? <h4>Api</h4> : <h4>Database</h4>}

                </div>
                <div className={style.typeOfDiets}>
                    {/* <div >
                    </div> */}
                    <h4 className={style.titleDiets}>Diets</h4>
                    <div className={style.diets}>
                        { 
                            diets.map(element => {
                            if(typeof element=== 'object' ){ 
                            return (<h5>{element.name}</h5>)
                        }else{
                            return (<h5>{element}</h5>)
                            }
                        })}
                    </div>
                    
                </div>

                </div>
                <div className={style.dataRight}>

                    <div className={style.titleName}>
                        <h2>{name}</h2>  
                    </div>

                    <div className={style.summaryContainer}>
                        <div className={style.titleSummary}>
                            <h3>Summary</h3>
                         </div>
                        <div className={style.summary} dangerouslySetInnerHTML={{ __html: dishSummary }}></div>
                    </div>

                    <div className={style.titleInstructions}>
                       
                            <h3 >Step by step</h3>
                        
                            <ol className={style.listSteps}>
                            {
                                instructions.map(step=>{
                                return (<li  key={index+1}>{step.step}</li>)
                            })}
                            </ol>
                    
                    </div>
                </div>
        </div>
        
    )
}
export default CardDetail

