import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";
import OrderBar from '../OrderBar/OrderBar'
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/actions";

const NavBar= ()=>{
    const {pathname}=useLocation();
    const dispatch=useDispatch();

    const handleResetFilters=()=>{
        dispatch(resetFilters())
    }

    return(
        <div className={style.mainContainer}>
            <div className={style.navBar}>
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
            <div className={style.auxBar}>
                    <OrderBar/>
                    <FilterBar/>
                    <button className={style.resetBtn} onClick={handleResetFilters}>Clean filters</button>
            </div>
        </div>
    )
}


export default NavBar;