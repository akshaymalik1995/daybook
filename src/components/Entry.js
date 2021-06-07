import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import {DeleteModal} from './DeleteModal'


export const Entry = ({ entry }) => {
    const editPath = `/edit/${entry.id}`
    const viewPath = `/view/${entry.id}`
    const { deleteEntry } = useContext(GlobalContext)
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "Aug", "Oct", "Nov", "Dec"]
    const today = new Date(entry.date)
    const tags = entry.tags.replace(" ", ", ")

    const day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    const month = monthNames[today.getMonth()]
    const year = today.getFullYear()
    const hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours()
    const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    const date = `${day} ${month} ${year}`
    const time = today.getHours() < 12 ? `${hours}:${minutes} am` : `${hours}:${minutes} pm`
    return (
<div>
        <DeleteModal deleteEntry={deleteEntry} entry={entry} />


        
        <div className="col-12 my-3">
            <div className="card">
                <div className="card-header bg-white align-items-center d-flex flex-wrap">
                    <span className='mx-1 badge badge-success p-2 '>{date}</span>
                    <span className='mx-1 badge p-2 badge-secondary '>{time}</span>


                    <span><Link className="nav-link" to={viewPath}><i className=' mx-1  fa fa-eye'></i></Link></span>
                    <span data-toggle="modal" data-target="#deleteModal"><i  className=' mx-1  fa fa-trash'> </i></span>
                </div>

                <div className="card-body">

                    <p className="card-text">{entry.text.slice(0, 200)} {entry.text.length > 200 ? "..." : ""}</p>
                    {tags ? <span className="font-italic">tags: {tags}</span> : ""}






                </div>
            </div>
            </div>
            </div>
    )
}
