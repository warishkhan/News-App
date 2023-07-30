import React, { createContext, useContext,useEffect, useReducer } from 'react';
 import reducer from './Reducer';

const AppContext = createContext();

let  API = "https://hn.algolia.com/api/v1/search?";

let initialState ={
    isLoading : true,
    query : "HTML",
    nbPages : 0,
    page : 0,
    hits : []
}

const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)

    // let isLoading = true;
    
    const fetchApiData = async(url) =>{

        dispatch({type:"SET_LOADING"});

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const removePost = (post_ID) =>{
        dispatch({
            type:"REMOVE_POST",
            payload: post_ID,
    });
    }

    const searchPost = (searchQuery) => {
        dispatch({
            type:"SEARCH_QUERY",
            payload:searchQuery,
        });
    }

    const getNextPage = ()=>{
        dispatch({
            type:"NEXT_PAGE",
        })
    }
    
    const getPrevPage = ()=>{
        dispatch({
            type:"PREV_PAGE",
        })
    }
    
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.page, state.query])
    
    
    return(
        <>
            <AppContext.Provider value={{...state,removePost, searchPost, getNextPage, getPrevPage }}>{children}</AppContext.Provider>
        </>
    )
}

const useGlobatContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobatContext};