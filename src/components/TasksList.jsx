import React, { useDeferredValue, useEffect, useRef } from "react";
import UpdateTask from "./UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedTask,
  removeTaskFromList,
  getTasksFromServer,
  deleteTasksInServer,
} from "../slices/taskSlice";

const TasksList = () => {
  const { selectedTask } = useSelector((state) => state.tasks);

  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const updateTask = (task) => {
    console.log("update task");
    dispatch(setSelectedTask(task));
  };

  useEffect(() => {
    dispatch(getTasksFromServer());
  }, [dispatch]);

  const deleteTask = (task) => {
    console.log("delete task");
    // dispatch(removeTaskFromList(task));
    dispatch(deleteTasksInServer(task))
      .unwrap()
      .then(() => {
        dispatch(removeTaskFromList(task));
      });
  };

  return (
    <section className="my-5">
      <table className="table border">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => (
              <tr className="text-center" key={task.id}>
                <th scope="row">{index + 1}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary mx-3"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => updateTask(task)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      deleteTask(task);
                    }}
                  >
                    <i className="bi bi-trash3"></i>{" "}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <UpdateTask selectedTask={selectedTask} />
    </section>
  );
};

export default TasksList;
