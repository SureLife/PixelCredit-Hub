import React, { useReducer, useState} from 'react';
import { MyContext } from './MyContext';
import { reducer, initialState } from "./Reducer";

export default function Container({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user,setUser]= useState(null)


  return (
    <MyContext.Provider value={{ state, dispatch,user,setUser }}>
      {children}
    </MyContext.Provider>
  );
}
