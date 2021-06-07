import React, { useContext } from 'react'
import {Entry} from "./Entry"
import { GlobalContext } from '../context/GlobalState'
export const Entries = () => {
    const { entries } = useContext(GlobalContext)
    const sortedEntries = entries.sort((a, b) => new Date(b.date) - new Date(a.date))
   
    return (
        <div className="row my-5">
            
            {sortedEntries.map(entry => (
                <Entry key={entry.id} entry={entry} />
            ))}

            {sortedEntries.length == 0 ? (<h5>No Entries Available.</h5>) : ""}


        </div>
    )
}
