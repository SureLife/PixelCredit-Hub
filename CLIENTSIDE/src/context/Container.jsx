import React, { useReducer } from 'react';
import { MyContext } from './MyContext';
import { reducer, initialState } from "./Reducer";

export default function Container({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
