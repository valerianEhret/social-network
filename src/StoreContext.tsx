import React from "react";
import {Store} from "redux";
import store from "./redux/redux-store";

const StoreContext = React.createContext<Store>(store)

type ProviderType = {
 store: Store
 children: React.ReactNode
}

export const Provider = (props:ProviderType) => {
 return   <StoreContext.Provider value={props.store}>
     {props.children}
 </StoreContext.Provider>
}

export default StoreContext