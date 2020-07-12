import React from "react";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {StorePropsType} from "./redux/store";

const StoreContext = React.createContext(store)

export const Provider = (props:StorePropsType) => {
 return   <StoreContext.Provider value={props.store}>
     {props.children}
 </StoreContext.Provider>
}

export default StoreContext