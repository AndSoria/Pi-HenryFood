import style from './Pagination.module.css'

const Pagination =({page, setPage,maxPages})=>{

    const previousPage=()=>{
        const prePage=page-1
        if(prePage>0){
            setPage(prePage)
        }
    }
    
    const nextPage=()=>{
        const laterPage=page+1

        if(laterPage<=maxPages)
        {
            setPage(laterPage)
        }
    }

    return (
        <div className={style.barPage}>
            <button className={style.previousBtn} onClick={previousPage} disabled={page<=1}></button>
            <p>{page} de {maxPages}</p>
            <button className={style.nextBtn} onClick={nextPage} disabled={page>=maxPages}></button>

        </div>
    )
}

export default Pagination