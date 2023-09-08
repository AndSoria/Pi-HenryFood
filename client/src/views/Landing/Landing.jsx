import { Link } from "react-router-dom";


const Landing=()=>{
    return (
        <>
            <h1>Henry food</h1>
           <p>Aca debes crear una descripcion</p>
           <Link to='/home'>
                <button>Ingresar</button>
           </Link>
        </>

    )
}

export default Landing;