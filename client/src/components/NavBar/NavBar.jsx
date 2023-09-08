import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";

const NavBar= ()=>{
    const {pathname}=useLocation();

    return(
        <div className={style.mainContainer}>
            <div className={style.title}>
             <h2>Henry Food</h2>
            </div>
            <div className={pathname.includes('home') ? style.barHome: style.barOther}>
            
                <Link to='/home'>
                    <button>Home</button>
                </Link>
                <Link to='/form'>
                    <button>Create recipe</button>
                </Link>
            </div>
                {(!pathname.includes('detail') && !pathname.includes('form') && <SearchBar />)}

        </div>
    )
}


export default NavBar;