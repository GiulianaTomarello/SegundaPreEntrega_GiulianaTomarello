import { createContext, useState  } from "react";

export const cartContext = createContext();


export function cartContextProvider(props){
   const saludo = "hola";
   
   const value = {
    saludo
   }

    return(
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}