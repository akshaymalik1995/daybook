import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const Entry = ({ entry }) => {
    const { deleteEntry } = useContext(GlobalContext)
    const entryText = entry.text.split("\n")
    return (
        <div  className="col-12 my-3">
                    <div className="card">
                        <div className="card-header d-flex">
                            <span className='mx-3'>{entry.date}</span>
                            <span className='mx-3'>{entry.time}</span>
                    <span className='mx-3'>{entry.tag}</span>
                    <span><i onClick={() => deleteEntry(entry.id)} className='fa fa-trash'></i></span>
                        </div>
                        <div className="card-body">
                    <h5 className="card-title">{entry.title}</h5>
                    {entryText.map(line => (
                        <p className="m-0 card-text">{line}</p>
                    ))}
                            

                        </div>
                    </div>
                </div>
    )
}
