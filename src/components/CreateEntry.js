import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState"
import { v4 } from 'uuid'


export const CreateEntry = () => {
    
    const history = useHistory()
    const today = new Date()
    
    const {addEntry} = useContext(GlobalContext)
    
    


    
    const [text, setText] = useState("")
    const [tags, setTags] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        
        const newEntry = {
            id: v4(),
            
            text,
            tags,
            date: today,
            
        }
        
        addEntry(newEntry)
        setText("")
        setTags("")
        history.push("/")
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
                        <input  className='form-control' type="text"
                            value={tags}
                            placeholder="Tags"
                            onChange={event => setTags(event.target.value)}
                        />
                        
                    </div>

                    <button type="submit" className="btn btn-sm btn-primary">Add</button>
                </form>
            </div>
        </div>
    )
}
