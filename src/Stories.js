/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useGlobatContext } from './Context'

const Stories = () => {

  const {hits, isLoading,removePost} = useGlobatContext()

if(isLoading){
        return(
            <>
                <h1>Loading....</h1>
            </>
        )
    }


  return (
    <>
    <div className="stories-div">
      <h2>My Tech News Posts</h2>
      {hits.map((curPost)=>{
        const { title, auther, objectID, url, num_comments} = curPost;
         return ( 
          
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By <span>{auther}</span> | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              <a href={url} target='_blank' rel="noreferrer">Read More</a>
             
              <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
            </div>
          </div>
          
         )
      })}
      </div>
    </>
  )
}

export default Stories
