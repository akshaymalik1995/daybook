import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const Entries = () => {
    const { entries } = useContext(GlobalContext)
    return (
        <div className="row my-5">
           
            {entries.map(entry => (
                     <div id={entry.id} className="col-12 my-3">
                    <div  class="card">
                    <div class="card-header d-flex">
                            <span className='mx-3'>{entry.date}</span>
                            <span className='mx-3'>{entry.time}</span>
                            <span className='mx-3'>{entry.tag}</span>
                    </div>
                    <div class="card-body">
                            <h5 class="card-title">{entry.title}</h5>
                            <p class="card-text">{entry.text}</p>
                       
                    </div>
                    </div>
                    </div>
                ))}
                
            
        </div>
    )
}
