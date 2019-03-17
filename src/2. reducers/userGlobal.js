const INITIAL_STATE ={username : '',loading:false,error:''}

export default (state=INITIAL_STATE,action)=>{
    if(action.type==='LOGIN_SUCCESS'){
        return {...INITIAL_STATE, username : action.payload}
    }else if(action.type==='LOADING'){
        return {...INITIAL_STATE, loading:true}
    }else if(action.type==='USERNAME_NOT_FOUND'){
        return {...INITIAL_STATE,error:'wrong username or password'}
    }else if(action.type==='SYSTEM_ERROR'){
        return {...INITIAL_STATE,error:'System error. Try again later'}
    }else if(action.type==='RESET_USER'){
        return INITIAL_STATE
    }else if(action.type=== 'USERNAME_NOT_AVAILABLE'){
        return {...INITIAL_STATE,error:'Username isnt available'}
    }
    else{
        return state
    }
}