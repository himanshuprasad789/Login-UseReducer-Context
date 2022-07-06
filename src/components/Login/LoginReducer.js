export const initialState={
    name: '',
    password:'',
    isLogging:false,
    isLoggedIn: false,
    error:false
}
export default function loginReducer(state,action) {
    const {name,password,isLogging,isLoggedIn,error} = state;
    switch(action.type) {
        case 'field':{
            return {
                ...state,
                [action.field]:action.value
            }
        }
        case 'login':{
            return {
                ...state,
                isLogging: true
            }
        }
        case 'success':{
            return {
                ...state,
                isLoggedIn:true,
                error: false,
                isLogging:false

            }
        }
        case 'error':{
            return {
                ...state,
                isLogging:false,
                error: true,
                name:'',
                password:'',
            }
        }
        case 'logout':{
            return {
                ...state,
                isLoggedIn:false,
                name:'',
                password:'',
            }
        }
        default:
            return state
    }
}
