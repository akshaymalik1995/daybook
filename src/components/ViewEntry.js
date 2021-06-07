import React, { useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"
import {Link} from 'react-router-dom'
export const ViewEntry = (props) => {
    const { entries } = useContext(GlobalContext)
    const [entry] = entries.filter(entry => entry.id === props.match.params.id)
    const editPath = `/edit/${entry.id}`
    const tags = entry.tags.replace(" ", ", ")
    
    const entryText = entry.text.split("\n")
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "Aug", "Oct", "Nov", "Dec"]
    const today = new Date(entry.date)
    const day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    const month = monthNames[today.getMonth()]
    const year = today.getFullYear()
    const hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours()
    const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    const date = `${day} ${month} ${year}`
    const time = today.getHours() < 12 ? `${hours}:${minutes} am` : `${hours}:${minutes} pm`
    return (
        <div>
            <div className='row my-5'>
                <div className="col-12 d-flex justify-content-between">
                <h5 >{date}</h5>
                <span><Link className="nav-link" to={editPath}><i className='mx-3  fa fa-pencil'></i></Link></span>
                
                </div>
                <div className="col-12 my-2">
                {entryText.map(line => (
                <p className="card-text">{line}</p>
                ))}

                   {tags ? <span className="font-italic">tags: {tags}</span> : ""} 
                  
                </div>
            
               
            </div>
            
        </div>
    )
}
