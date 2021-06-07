import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState"
import {v4} from 'uuid'

export const EditEntry = (props) => {
    
    const history = useHistory()
    
    const {editEntry, entries} = useContext(GlobalContext)
    
    const [entry] = entries.filter(entry => entry.id === props.match.params.id)
    


    const newID = v4()
    const viewPath = `/view/${newID}`
    const oldViewPath = `/view/${entry.id}`
    const [text, setText] = useState(entry.text)
    const [tags, setTags] = useState(entry.tags)

    const onSubmit = (event) => {
        event.preventDefault()
        
        const newEntry = {
            id: newID,
            
            text,
            tags,
            date: entry.date,
            time: entry.time
        }
        
        editEntry(props.match.params.id, newEntry)
        setText("")
        setTags("")
        history.push(viewPath)
        }


    


    return (
        <div className='row my-5'>
            <div className="col-12">
            
                <form onSubmit={onSubmit}>
                    
                    <div className="form-group">

                        <textarea
                            id='textarea'
                            required
                            value={text}
                            onChange={event => setText(event.target.value)}
                            type="text" rows="10" className="form-control" placeholder="Dear Diary" />
                    </div>

                    <div className='form-group'>
                    <div className='form-group'>
                            <input className="form-control" type="text"
                            placeholder="Tags"
                            value={tags}
                            onChange={event => setTags(event.target.value)}
                        />
                        
                    </div>
                    </div>

                    <button type="submit" className="btn btn-sm btn-primary">Edit</button>
                    <a className="btn mx-3 btn-sm btn-danger" href={oldViewPath} role="button">Cancel</a>
                </form>
            </div>
        </div>
    )
}
