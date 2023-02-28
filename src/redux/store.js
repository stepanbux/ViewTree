import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { treeApi } from "./api";
import mainReducer from "./nodeSlice";


const rootReducer = combineReducers({
    [treeApi.reducerPath]: treeApi.reducer,
    mainReducer: mainReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(treeApi.middleware)
});

setupListeners(store.dispatch);