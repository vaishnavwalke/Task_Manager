import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, deleteUser } from "../features/darkModeSlice";

// useEffect(() => {
//   const storedUsers = localStorage.getItem("users");
//   if (storedUsers) {
//     dispatch(addUser(JSON.parse(storedUsers)));
//   }
//   console.log(storedUsers, "get local data");
// }, [dispatch]);

// to set the data from local storage
// const getLocalItems = () => {
//   let tasks = localStorage.getItem("tasks");
//   if (tasks) {
//     //  console.log(JSON.parse(localStorage.getItem("tasks")), "saved");
//     console.log(tasks, "data got from local");
//     return JSON.parse(localStorage.getItem("tasks"));
//   } else {
//     return [];
//   }
// };

const Form = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // Load data from local storage on page refresh
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      dispatch(addUser(parsedTasks));
    }
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  // getLocalItems();
  //add data to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <Link to="/create" className="btn btn-success my-3">
        New Task
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.description}</td>
              <td>{user.status}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
