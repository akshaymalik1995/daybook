import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
    entries: [
        {id:1, text : "It has been a great day", time: "9:06", date: "7 June 2021", tag : "Love"} ,
        {id:2, text : "The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted).", time: "9:06", date: "7 June 2021", tag : "Love"} ,
        {id:3, text : "The <textarea> tag defines a multi-line text input control.The <textarea> element is often used in a form, to collect user inputs like comments or reviews.A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).", time: "9:06", date: "7 June 2021", tag : "Love"} ,
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

    return (
        <GlobalContext.Provider value={
            {
                entries: state.entries,
                tags : state.tags
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}