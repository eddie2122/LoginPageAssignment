import { Types } from './actionsTypes';
import {LoginActions} from '.././reduxStore/LoginActions'


export const initialState = {
    
       username : "hruday@gmail.com",
       password : 'hruday123',


    user:[{
    "id":1,
    "name":"test1",
    "age" : "11",
    "gender":"male",
    "email" : "test1@gmail.com",
    "phoneNo" : "9415346313"
    },
     {
    "id" : 2,
    "name":"test2",
    "age" : "12",
    "gender":"male",
    "email" : "test2@gmail.com",
    "phoneNo" : "9415346314"
    },
    {
    "id":3,
    "name":"test3",
    "age" : "13",
    "gender":"male",
    "email" : "test3@gmail.com",
    "phoneNo" : "9415346315"
    },
    {
    "id":4,
    "name":"test4",
    "age" : "14",
    "gender":"male",
    "email" : "test4@gmail.com",
    "phoneNo" : "9415346316"
    },
    {
    "id":5,
    "name":"test5",
    "age" : "15",
    "gender":"male",
    "email" : "test5@gmail.com",
    "phoneNo" : "9415346317"
    },
    {
    "id":6,
    "name":"test6",
    "age" : "16",
    "gender":"male",
    "email" : "test6@gmail.com",
    "phoneNo" : "9415346318"
    }
]}

export const LoginReducer = (state = initialState, action) => {
  
  switch (action.type) {
        case LoginActions: return {
            username: state.username
        }
    case Types.LOGIN:
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case Types.FORM_SUBMITION_STATUS:
      return {
        ...state,
        formSubmitted: action.payload.status
      }
    default:
      return state;
  }
}
