import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      // state.pop(action.payload)
      state.splice(action.payload ,1)
    },
    clearAllUsers(state, action) {
     return state=[];
    },
  },
});
export default userSlice.reducer;
 export const {addUser,removeUser,clearAllUsers}=userSlice.actions;