'use client'

import store from "./store"
import { Provider } from "react-redux";
import Header from "./components/header";


export default function ReduxProvider({children}){
    return <Provider store={store}>
        <Header/>
        {children}</Provider>
}