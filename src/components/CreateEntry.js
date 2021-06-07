import React from 'react'

export const CreateEntry = () => {
    return (
        <div className='row'>
            <div className="col-12">
                <h3>Create Entry</h3>
                <form>
                    <div className="form-group">
                       
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Title" />
                      
                    </div>
                    <div className="form-group">
                       
                        <textarea type="text" rows="10" className="form-control"  placeholder="Dear Diary" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
