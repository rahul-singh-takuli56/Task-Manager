import { useState } from "react";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("");
  const [priorityInput, setPriorityInput] = useState("normal");
  const [filter, setFilter] = useState("all"); // options: 'all', 'completed', 'pending'
  const [sortBy, setSortBy] = useState("none"); // options: 'none', 'dueDate', 'priority'
  const [sortOrder, setSortOrder] = useState("asc"); // options: 'asc', 'desc'
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState("");
  const [editingTaskDueDate, setEditingTaskDueDate] = useState("");

  const addTask = () => {
    if (newTaskInput.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: newTaskInput,
        completed: false,
        dueDate: dueDateInput,
        priority: priorityInput,
      };
      setTasks([...tasks, newTask]);
      setNewTaskInput("");
      setDueDateInput("");
      setPriorityInput("normal");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const startEditingTask = (taskId, title, dueDate) => {
    setEditingTaskId(taskId);
    setEditingTaskTitle(title);
    setEditingTaskDueDate(dueDate);
  };

  const cancelEditingTask = () => {
    setEditingTaskId(null);
    setEditingTaskTitle("");
    setEditingTaskDueDate("");
  };

  const saveEditedTask = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === editingTaskId) {
          return {
            ...task,
            title: editingTaskTitle,
            dueDate: editingTaskDueDate,
          };
        }
        return task;
      })
    );
    setEditingTaskId(null);
    setEditingTaskTitle("");
    setEditingTaskDueDate("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "pending") {
      return !task.completed;
    }
    return true;
  });

  const compareByDueDate = (taskA, taskB) => {
    if (!taskA.dueDate) return 1;
    if (!taskB.dueDate) return -1;
    return new Date(taskA.dueDate) - new Date(taskB.dueDate);
  };

  const compareByPriority = (taskA, taskB) => {
    const priorityOrder = { low: 1, normal: 2, high: 3 };
    return priorityOrder[taskA.priority] - priorityOrder[taskB.priority];
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "dueDate") {
      const result = compareByDueDate(a, b);
      return sortOrder === "asc" ? result : -result;
    } else if (sortBy === "priority") {
      const result = compareByPriority(a, b);
      return sortOrder === "asc" ? result : -result;
    }
    return 0;
  });

  const priorityMarker = (priority) => {
    switch (priority) {
      case "low":
        return "🟢";
      case "normal":
        return "🟡";
      case "high":
        return "🔴";
      default:
        return "";
    }
  };

  return (
    <div className="mt-2">
      <div>
        <img
          src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1713722894~exp=1713723494~hmac=0366c0f320c5a2e8a01b524a1dbbc7745e431a2cf705e3eed15461184f679e05"
          alt="task image"
          className="mx-auto lg:h-[300px] h-[200px] lg:w-[550px] w-full mt-3"
        />
      </div>
      <div className="text-center mt-4 mx-1 ">
        <div className="bg-white/70 lg:py-10 py-4 lg:px-10 px-1  lg:rounded-xl rounded-sm inline-block search-bar text-center lg:text-2xl">
          <input
            type="text"
            className="mb-2 lg:mb-0 border-2 rounded-xl border-sky-600 p-2 mr-2 placeholder:text-black/50"
            placeholder="Add a new task"
            value={newTaskInput}
            onChange={(e) => setNewTaskInput(e.target.value)}
          />
          <input
            type="date"
            className="border-2 rounded-xl border-sky-600 p-2 mr-2 placeholder:text-black/50"
            value={dueDateInput}
            onChange={(e) => setDueDateInput(e.target.value)}
          />
          <select
            value={priorityInput}
            onChange={(e) => setPriorityInput(e.target.value)}
            className="border-2 mb-5 lg:mb-0 rounded-xl border-sky-600 p-2 mr-2 placeholder:text-black/50"
          >
            <option value="low">Low Priority</option>
            <option value="normal">Normal Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button
            className="bg-blue-600 text-white py-2 px-4 mx-4 rounded-xl"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="filter-bar lg:text-center text-sm lg:mt-10  mt-4 ">
        <div className="bg-white/80  lg:rounded-xl rounded-sm  inline-block mx-1 lg:mb-4 mb- lg:text-2xl text-xl lg:px-10 px-2 lg:py-10 py-4 ">
          <label className="mr-4 lg:font-semibold">Filter By:</label>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mr-2 lg:py-2 lg:px-3 rounded-md"
          >
            <option value="all" className="text-slate-900 lg:px-3 lg:py-2">
              All
            </option>
            <option
              value="completed"
              className="text-slate-900 lg:px-3 lg:py-2"
            >
              Completed
            </option>
            <option value="pending" className="text-slate-900 lg:px-3 lg:py-2">
              Pending
            </option>
          </select>
          <br className="black lg:hidden" />
          <label className="lg:ml-4  lg:font-semibold ">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mr-2 lg:py-2 lg:px-3 rounded-md"
          >
            <option value="none" className="text-slate-900">
              None
            </option>
            <option value="dueDate" className="text-slate-900">
              Due Date
            </option>
            <option value="priority " className="text-slate-900">
              Priority
            </option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="mt-4 lg:mt-0 mr-2 lg:py-2 lg:px-3 rounded-md"
          >
            <option value="asc" className="text-slate-900">
              Ascending
            </option>
            <option value="desc" className="text-slate-900">
              Descending
            </option>
          </select>
        </div>
      </div>

      <div className="text-center pb-10 lg:text-2xl mt-4 ">
        <ul className="list-disc inline-block lg:rounded-xl pl-4 lg:min-w-[1000px] w-[350px] text-center mt-10 bg-white/80 border-slate-200">
          {sortedTasks.map((task) => (
            <li
              key={task.id}
              className="mt-5 list-none flex flex-col lg:flex-row items-center justify-between"
            >
              {editingTaskId === task.id ? (
                <div className="flex flex-col lg:flex-row  items-center">
                  <input
                    type="text"
                    value={editingTaskTitle}
                    onChange={(e) => setEditingTaskTitle(e.target.value)}
                    className="border px-4 py-2 mr-2 mb-2 lg:mb-0 lg:mr-6 rounded-xl"
                  />
                  <input
                    type="date"
                    value={editingTaskDueDate}
                    onChange={(e) => setEditingTaskDueDate(e.target.value)}
                    className="border px-4 py-2 mr-2 mb-2 lg:mb-0 lg:mr-6 rounded-xl"
                  />
                  <div className="flex flex-row ">
                    <button
                      className="bg-green-500 text-white py-2 px-5 mr-2 mb-2 lg:mb-0 lg:mr-2 rounded-xl"
                      onClick={saveEditedTask}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white py-2 px-5 mr-2 mb-2 lg:mb-0 lg:mr-2 rounded-xl"
                      onClick={cancelEditingTask}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                      className="mr-1 w-7 h-5"
                    />
                    <span className={task.completed ? "line-through" : ""}>
                      {task.title}
                    </span>
                    <span className="ml-2">
                      {priorityMarker(task.priority)}
                    </span>
                  </div>
                  <div className="flex items-center lg:mt-0 mb-2">
                    <button
                      className="bg-blue-600 text-white py-2 px-5 mr-2 mb-2 lg:mb-0 rounded-md"
                      onClick={() =>
                        startEditingTask(task.id, task.title, task.dueDate)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white py-2 px-5 mr-2 mb-2 lg:mb-0 rounded-md"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskApp;
