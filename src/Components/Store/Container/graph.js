import { createSlice } from "@reduxjs/toolkit";

export const graphSlice = createSlice({
  name: "graph",
  initialState: {
    value: [],
  },
  reducers: {
    getData: async (state, action) => {
      console.log("fetching data from: " + action.payload);
      const respose = await fetch("/data/graph?id=" + action.payload);
      console.log(respose.body);
      //Redux toolkit permete di fare le modifiche dei archivi di forma mutada
      state.value = respose.body;
    },
  },
});

export const { getData } = graphSlice.actions;

export default graphSlice.reducer;
