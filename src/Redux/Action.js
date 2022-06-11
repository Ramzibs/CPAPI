import {GETDATA} from '../Redux/ActionType'


export const getList=(list)=>{
    return{

        type:GETDATA,
        payload:list
        
    }
}
export const addNewUser=(add)=>{
    return {
        type:'ADDNEWUSER',
        payload:add

    }
}



