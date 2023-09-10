import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";
import OrderBar from '../OrderBar/OrderBar'
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/actions";
import { useState } from "react";

const NavBar= ()=>{
    const {pathname}=useLocation();
    const dispatch=useDispatch();
    const [options, setOptions]=useState([]);
    const [orders,setOrders]=useState([]);

    const handleResetFilters=()=>{
        setOptions([])
        setOrders([])
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
                    <OrderBar setOrder={setOrder} order={orders} />
                    <FilterBar setOptions={setOptions}  options={options} />
                    <button className={style.resetBtn} onClick={handleResetFilters}>Clean filters</button>
            </div>
        </div>
    )
}


export default NavBar;