import React from 'react'

export const DeleteModal = ({deleteEntry, entry}) => {
    return (
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteModalLabel">Are you sure?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                        <div class="modal-footer">
                            
                        <button onClick={() => deleteEntry(entry.id)} type="button" class="btn btn-secondary" data-dismiss="modal">Delete</button>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
