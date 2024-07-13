import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { updateTaskInList, updateTasksInServer } from "../slices/taskSlice";
import { useDispatch } from "react-redux";

const UpdateTask = ({ selectedTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);

  const dispatch = useDispatch();

  const updateTask = (e) => {
    e.preventDefault();
    dispatch(updateTasksInServer({ id, title, description }));
  };

  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setId(selectedTask.id);
    }
  }, [selectedTask]);

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Update Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="task-title" className="form-label">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="task-title"
                    aria-describedby="task-title"
                    placeholder="Enter Task Title"
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="task-description" className="form-label">
                    Task Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="task-description"
                    placeholder="Enter Task Description"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </div>
                <div className="float-end"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => updateTask(e)}
              >
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
