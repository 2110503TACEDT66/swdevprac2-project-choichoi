"use client"
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist";
import { LinearProgress } from "@mui/material";

export default function ReduxProvider({children}:{children:React.ReactNode}) {
    let reduxPersistor = persistStore(store)
    return(
        <Provider store={store}>
            <PersistGate loading={<p>Loading...<LinearProgress/></p>} persistor={reduxPersistor}>
                {children}                
            </PersistGate>
        </Provider>
    );
}