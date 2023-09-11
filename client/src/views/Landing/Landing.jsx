import { Link } from "react-router-dom";
import style from './Landing.module.css'


const Landing=()=>{
    return (
        <div className={style.landingContainer}>
            <h1 className={style.title}>Henry food</h1>
           <p className={style.text}>¡Bienvenido a "Henry Food"! Este proyecto se centra en la implementación de conocimientos y el desarrollo de habilidades técnicas en la carrera "Full Stack".

En esta plataforma digital, podrás explorar una amplia variedad de recetas que se adapten a tus gustos culinarios, junto con información detallada sobre cada una de ellas. Además, tienes la capacidad de crear y compartir tus propias recetas con la comunidad.

Te invitamos a explorar "Henry Food" y esperamos que tengas una experiencia única y de excelencia mientras te sumerges en el mundo de la cocina y la tecnología.

<br></br>
<br></br>
    <p className={style.autor}>Andrés Soria pt13b</p>
    </p>
           <Link to='/home'>
                <button className={style.btn} >Ingresar</button>
           </Link>
        </div>

    )
}

export default Landing;