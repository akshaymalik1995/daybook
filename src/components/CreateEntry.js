import React, { useContext, useState } from 'react'
import { GlobalContext } from "../context/GlobalState"
import {v4} from 'uuid'
export const CreateEntry = () => {
    const today = new Date()
    
    const { tags, addEntry } = useContext(GlobalContext)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [tag, setTag] = useState(tags[0].tag)

    const onSubmit = (event) => {
        event.preventDefault()
        const newEntry = {
            id: v4(),
            title,
            text,
            tag,
            date : `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`,
            time : `${today.getHours()}:${today.getMinutes()}`}
        console.log(newEntry)
        addEntry(newEntry)
        }


    


    return (
        <div className='row my-5'>
            <div className="col-12">
                <h3>Create Entry</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <input type="text"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            className="form-control" placeholder="Enter Title" />

                    </div>
                    <div className="form-group">

                        <textarea
                            required
                            value={text}
                            onChange={event => setText(event.target.value)}
                            type="text" rows="10" className="form-control" placeholder="Dear Diary" />
                    </div>

                    <div className='form-group'>
                        <select
                            className="form-control"
                            value={tag}
                            onChange={event => setTag(event.target.value)}>

                            {tags.map(item => (<option
                                key={item.id}
                                value={item.tag}>
                                {item.tag}
                            </option>))}


                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
