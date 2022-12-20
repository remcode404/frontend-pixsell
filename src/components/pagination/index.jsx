import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../reducers/Slice/GamesList';

 const Pagination = ({onChangePage}) => {
    
    const deispatch = useDispatch();
    const page = useSelector((state) => state.gameSlice.page);
    useEffect(() => { 

        deispatch(fetchGames());
    
      }, [deispatch, page]);
    

return(
    <div>
 <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => onChangePage(event.selected + 1 )}
        pageRangeDisplayed={2}
        pageCount={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />



    </div>


    )
}


export default Pagination