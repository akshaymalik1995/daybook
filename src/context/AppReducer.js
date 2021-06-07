export default (state, action) => {
    
    switch (action.type) {
        case 'DELETE_ENTRY':
            return {
                ...state,
                entries: state.entries.filter(entry => entry.id !== action.payload)
            }
            
        case 'ADD_ENTRY':
            return {
                ...state,
                entries: [action.payload, ...state.entries]
            }
        case 'EDIT_ENTRY':
            const newState = state.entries.filter(entry => entry.id !== action.payload.id)
            console.log(action.payload.entry)
            return {
                ...state,
                entries: [action.payload.entry, ...newState]
            }
        default:
            return state;
    }
}