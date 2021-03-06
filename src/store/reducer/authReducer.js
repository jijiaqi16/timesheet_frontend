import * as actionTypes from '../action/actionTypes';
import * as update from '../../Utility/update'

const initalState = {
    isAuthenticated:false,
    loginError:"",
    loading:false,
    redirect:"",
};

const authStart=(state,action)=>{
    return update.updateObject(state,{isAuthenticated:false,loginError:"",loading:false,redirect:""});
}

const authSuccess=(state,action)=>{
    return update.updateObject(state,{isAuthenticated:true});
}

const authFail=(state,action)=>{
    return update.updateObject(state,{loginError:action.loginError,isAuthenticated:false,loading:false});
}

const authLoading=(state,action)=>{
    return update.updateObject(state,{loading:true});
}

const authLogout=(state,action)=>{
    return update.updateObject(state,{isAuthenticated:false})
}



const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:return (authStart(state,action));
        case actionTypes.AUTH_SUCCESS:return (authSuccess(state,action));
        case actionTypes.AUTH_FAIL:return (authFail(state,action));
        case actionTypes.AUTH_LOGOUT:return (authLogout(state,action));
        case actionTypes.AUTH_LOADING:return(authLoading(state,action));
        default:
            return state;
    }
};

export default reducer;