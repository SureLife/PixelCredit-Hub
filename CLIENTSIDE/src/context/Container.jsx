import React, { useReducer, useState, useEffect, useContext } from 'react';
import { MyContext } from './MyContext';
import { reducer, initialState } from "./Reducer";

export default function Container({ children }) {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user,setUser]= useState(null)


// CODE FOR USER VERIFICATION (Checks and saves token to local storage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5500/users/verifytoken", {
        // if we use another path we have to modify this
        method: "GET",
        headers: { token: token },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          if (result.success) {
            setUser(result.data);
          } else {
            console.log(result.message);
            setToken(localStorage.getItem("token"))
          }
        });
    }
  }, []);


  return (
    <MyContext.Provider value={{ state, dispatch,user,setUser }}>
      {children}
    </MyContext.Provider>
  );
}
