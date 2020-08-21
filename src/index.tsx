import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



// const renderTree =(state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                {/*<StoreContext.Provider*/}
                {/*    value={store}*/}
                {/*>*/}
                {/*<React.StrictMode>*/}
                <App
                    // state ={state}
                    //  dispatch ={store.dispatch.bind(store)}
                    // store={store}
                />
                {/*</React.StrictMode>,*/}

                {/*</StoreContext.Provider>*/}

            </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
// }


// renderTree(store.getState());
//
// store.subscribe(   () => {
//     let state = store.getState()
//     renderTree(state)
//     }
//
// )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
