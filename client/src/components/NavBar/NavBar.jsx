import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";
import OrderBar from '../OrderBar/OrderBar'
import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../../redux/actions";


const NavBar= ()=>{
    const {pathname}=useLocation();
    const dispatch=useDispatch();
    const render=useSelector(state=>state.render)

    const handleResetFilters=()=>{
        
        dispatch(resetFilters())
    }

    return(
        <div className={style.mainContainer}>
            <div className={style.navBar}>
                <div className={style.title}>
                <h2>Henry Food</h2>
                </div>
                <div className={style.barHome}>
                
                    <Link to='/home'>
                        <button className={style.btnMenu}>Home</button>
                    </Link>
                    <Link to='/form'>
                        <button className={style.btnMenu}>Create recipe</button>
                    </Link>
                    
                </div>
                <div className={style.searchBarContainer}>
                    {(!pathname.includes('detail') && !pathname.includes('form') && <SearchBar  />)}
                </div>

            </div>
            {(!pathname.includes('detail') && !pathname.includes('form') && <div className={style.auxBar}>
                    <OrderBar />
                    <FilterBar />
                    <button className={style.resetBtn} onClick={handleResetFilters} disabled={render==='recipes'}>Clean filters</button>
            </div>)}
            
        </div>
    )
}


export default NavBar;