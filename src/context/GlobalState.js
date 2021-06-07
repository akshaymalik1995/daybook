import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
    entries: [
        
    ], 
    tags: [
        {id : 1 , tag : "General"},
        {id : 2 , tag : "Love"},
        {id : 3 , tag : "Work"},
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addEntry(entry) {
        dispatch({
            type: 'ADD_ENTRY',
            payload: entry
        })
    }

    function deleteEntry(id) {
        dispatch({
            type: 'DELETE_ENTRY',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                entries: state.entries,
                tags: state.tags,
                addEntry,
                deleteEntry,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}