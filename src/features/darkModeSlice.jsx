import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";
const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode")) || false,
};
export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
  },

  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    updateUser: (state, action) => {
      const { id, title, description, status } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.title = title;
        uu.description = description;
        uu.status = status;
      }
    },
    deleteUser:(state,action)=> {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
if(uu){
  return state.filter(f=>f.id !== id);
}

    }
  },
});
export const { toggleDarkMode } = darkModeSlice.actions;
export const { addUser, updateUser,deleteUser } = darkModeSlice.actions;
export default darkModeSlice.reducer;
