import React, { useEffect, useState } from "react";
import { addUser } from "../features/darkModeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //load data from local storage
  // useEffect(() => {
  //   const storedUsers = localStorage.getItem("users");
  //   if (storedUsers) {
  //     dispatch(addUser(JSON.parse(storedUsers)));
  //   }
  //   console.log(storedUsers, "get local data");
  // }, [dispatch]);

  // // saves users data whenever it changes

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  //   console.log(users, "save local value");
  // }, [users]);
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(users));
  // }, [users]);

  // const getLocalItems = () => {
  //   let tasks = localStorage.getItem("tasks");
  //   if (tasks) {
  //     console.log(JSON.parse(localStorage.getItem("tasks")), "saved");
  //     return JSON.parse(localStorage.getItem("tasks"));
  //   } else {
  //     return [];
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: Math.random().toString(36),
        title,
        description,
        status,
      })
    );
    //getLocalItems();
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-40 border bg-secondary text-white p-5">
        <h3>Add new Task</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Task name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description : </label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status">Status : </label>
            <input
              placeholder="Enter Status"
              type="text"
              name="status"
              className="form-control"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>{" "}
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
