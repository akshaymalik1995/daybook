import React, { useContext } from 'react'
import {Entry} from "./Entry"
import { GlobalContext } from '../context/GlobalState'
export const Entries = () => {
    const { entries } = useContext(GlobalContext)
    return (
        <div className="row my-5">

            {entries.map(entry => (
                <Entry key={entry.id} entry={entry} />
            ))}


        </div>
    )
}
