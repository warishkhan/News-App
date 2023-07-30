import React from 'react'
import { useGlobatContext } from './Context'

const Pagination = () => {

const {page, nbPages, getPrevPage, getNextPage} = useGlobatContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={()=>getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={()=>getNextPage()}>NEXT</button>
      </div>
    </>
  )
}

export default Pagination
