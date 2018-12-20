const initState = {
    authERROR: null
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('Login Error');
        return{
            ...state,
            authERROR: 'Login failed'
        }
        case 'LOGIN_SUCCESS':
        console.log('Login Success');
        return{
            ...state,
            authERROR: 'Login success'
        }
        case 'SIGNOUT_SUCCESS':
        console.log('SignOut Success');
        return state;
        case 'SIGNUP_SUCCESS':
        console.log('SignUp Success');
        return{
            ...state,
            authERROR: null
        }
        case 'SIGNUP_ERROR':
        console.log('SignUp Failed');
        return{
            ...state,
            authERROR: action.err.message
        }
        default:
        return state;
    }
}
export default authReducer