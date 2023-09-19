import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/darkModeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-white text-2xl">Task Manager</h1>
      <button onClick={() => dispatch(toggleDarkMode())}>Dark Mode</button>
    </div>
  );
};

export default Header;
