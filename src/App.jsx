import "./App.css";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import TasksList from "./components/TasksList";
import UpdateTask from "./components/UpdateTask";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <AddTask />
            <TasksList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
