import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

export const CreateEntry = () => {
    const { tags } = useContext(GlobalContext)
    console.log(tags)
    return (
        <div className='row my-5'>
            <div className="col-12">
                <h3>Create Entry</h3>
                <form>
                    <div className="form-group">
                       
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Title" />
                      
                    </div>
                    <div className="form-group">
                       
                        <textarea type="text" rows="10" className="form-control"  placeholder="Dear Diary" />
                    </div>

                    <div className='form-group'>
                        <select className="form-control">
                            {tags.map(tag => (<option value={tag.id}>{tag.tag}</option>))}
                        

                    </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
