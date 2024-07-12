import { useState } from "react";
import { addTaskToList } from "../slices/taskSlice";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    console.log({ title, description });
    dispatch(addTaskToList({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <section className="my-5">
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
        <div className="float-end">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => addTask(event)}
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddTask;
