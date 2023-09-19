import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/darkModeSlice";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { title, description, status } = existingUser[0];
  const [utitle, setTitle] = useState(title);
  const [udescription, setDescription] = useState(description);
  const [ustatus, setStatus] = useState(status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        title: utitle,
        description: udescription,
        status: ustatus,
        id: id,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-40 border bg-secondary text-white p-5">
        <h3>Update Task</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Task name"
              value={utitle}
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
              value={udescription}
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
              value={ustatus}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>{" "}
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
