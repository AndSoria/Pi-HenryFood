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
            
            <button className={style.buttonPage} onClick={previousPage} disabled={page<=1}>Previous</button>
            <p className={style.referencePages}>{page} de {maxPages}</p>
            <button className={style.buttonPage} onClick={nextPage} disabled={page>=maxPages}>Next</button>
        </div>
    )
}

export default Pagination