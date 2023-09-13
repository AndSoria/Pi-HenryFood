
import style from './Card.module.css'
import {Link} from 'react-router-dom'


const Card = (props)=>{

    const {id, name ,image , diets, created, healthScore}=props
    
    return(
        
            <div className={style.cardContainer}>

                <div className={style.Name}>
                    <h3>{name}</h3>
                </div>

                <div className={style.ImgAndTypes}>

                    <div className={style.Image}>
                        <img src={image}/> 
                    </div>

                    <div className={style.TypeOfDiets}>
                        { 
                            diets.map(element => {
                                if(typeof element=== 'object' ){ 
                                    return (<h3>{element.name}</h3>)
                                }else{
                                    return (<h3>{element}</h3>)
                                }
                            })}
                    </div>

                </div>

                <div className={style.reference}>
                            <div className={style.data}>
                                    { created ? <p>Db</p> : <p>Api</p>}
                                    <p>Id: {id}</p>
                                    <p>Health Score: {healthScore}</p>
                            </div>
                    
                    <div className={style.info}>

                        <Link to={`/detail/${id}`}>

                        <button className={style.linkButton}> Info </button>

                        </Link>

                    </div>

                </div>

            </div>

                )
            }

export default Card
