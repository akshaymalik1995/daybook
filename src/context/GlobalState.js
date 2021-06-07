import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

if (!localStorage.entries) {
    localStorage.setItem('entries', JSON.stringify([]))
}

const initialState = {
    entries: JSON.parse(localStorage.entries), 
    
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
    function editEntry(id, entry) {
        dispatch({
            type: 'EDIT_ENTRY',
            payload: { id: id, entry: entry }
        })
    }

    
    localStorage.entries = JSON.stringify(state.entries)
    

    return (
       
        <GlobalContext.Provider value={
            {
                entries: state.entries,
                
                addEntry,
                deleteEntry,
                editEntry, 
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}