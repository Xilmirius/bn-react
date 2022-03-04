import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./Container/graph";

//Soluzione per la gestione dei archivi
//Meglio che Context per gestire data dinamica
export default configureStore({
  reducer: {
    graphs: graphReducer,
  },
});
