import React, { useState } from "react";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
const App = () => {
  const { mode } = useSelector((state) => state.darkMode);

  console.log(mode);
  return (
    <Theme mode={mode}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}>
          </Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
};

export default App;

const Theme = styled.div`
  background-color: ${(props) => (props.mode ? "white" : "black")};
  color: ${(props) => (props.mode ? "black" : "white")};
  height: "100vh";
`;
