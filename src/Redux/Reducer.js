import { GETDATA } from '../Redux/ActionType'

const init = {
    list: []
}

const listReducers = (state = init, action) => {
    switch (action.type) {
        case GETDATA:
            return {
                ...state,
                list: action.payload
            }
            case 'ADDNEWUSER':
            return {
                ...state,   
                list: [...state.list,action.payload]
            }
        default: return state

   

            
}
}


export default listReducers
   
