import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store, {RootStateType, StorePropsType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const renderTree =(state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state ={state}
                 dispatch ={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


renderTree(store.getState());

store.subsсribe(renderTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
