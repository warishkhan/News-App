import React from 'react'
import { useGlobatContext } from './Context';

const Search = () => {

const {query,searchPost} = useGlobatContext();

  return (
    <>
      <h1>Wartech Technical News Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder='Search here'  value={query} onChange={(e) => searchPost(e.target.value)}/>
        </div>
      </form>
    </>
  )
}

export default Search;
