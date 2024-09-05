'use client'

import store from "./store"
import { Provider } from "react-redux";
import Header from "./components/header";


export default function ReduxProvider({children,getSession}){
    return <Provider store={store}>
        <Header getSession={getSession}/>
        {children}</Provider>
}