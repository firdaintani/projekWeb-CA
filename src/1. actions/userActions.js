import axios from 'axios'
import {urlApi} from '../support/urlApi'
import cookie from 'universal-cookie'

const objCookie = new cookie()
export const fnLogin=(paramUname,paramPassword)=>{
    return(dispatch)=>{
        dispatch({
            type: 'LOADING'
        })

        axios.get('http://localhost:2000/users',{params:{username:paramUname,password:paramPassword}})

        .then((res)=>{
            if(res.data.length>0){
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload : paramUname
                })
            }else{
                dispatch({
                    type:'USERNAME_NOT_FOUND'
                })
            }
        })

        .catch((err)=>{
            console.log(err)

            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
    }
}


export const keepLogin =(cookie)=>{
    return (dispatch)=>{
        axios.get('http://localhost:2000/users',{params:{username:cookie}})
        .then((res)=>{
            if(res.data.length>0){
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload: res.data[0].username
                })
            }
        })
        .catch((err)=> console.log(err))
    }
}

//reset global state saat logout
export const resetUser=()=>{
    return {
        type : 'RESET_USER'
    }
}

export const onRegister=(paramUname,paramEmail,paramPassword)=>{
   return (dispatch)=>{
        dispatch({
            type: 'LOADING'
        })
        axios.get(urlApi+'/users?username='+paramUname)
        .then((res)=>{console.log(res)
            if(res.data.length>0){
                dispatch({
                    type: 'USERNAME_NOT_AVAILABLE'
                })
            }
            else{
                axios.post(urlApi+'/users', {username:paramUname,password:paramPassword,email:paramEmail})
                .then((res)=>dispatch({
                    type: 'LOGIN_SUCCESS',
                    // payload: {username : newData.username, id : res.data.id, email : paramEmail}
                    payload : res.data.username
                },
                // path :'/' biar bisa diakses di semua component
                    objCookie.set('userData', paramUname,{path:'/'}) 
                ))
                .catch((err)=>console.log(err))
            }
        })


        .catch((err)=>{
            dispatch({
                type: 'SYSTEM_ERROR'
            })
        })
    }
}