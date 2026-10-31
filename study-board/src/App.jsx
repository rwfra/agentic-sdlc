import { useState } from 'react'
import TaskCard from './TaskCard'
import StatsCard from './StatsCard'
import AddTaskForm from './AddTaskForm'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const initialTasks = [
  { id: 0, status: "completed", title: "Task 1", description: "This is a sample task." },
  { id: 1, status: "in-progress", title: "Another Task", description: "This is another sample task." },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const completedTasks = tasks.filter(task => task.status === "completed").length;
  const notStartedTasks = tasks.filter(task => task.status === "not-started").length;
  const inProgressTasks = tasks.filter(task => task.status === "in-progress").length;

  const handleAdd = (title, description) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), status: "not-started", title: title, description: description }
    ]);
    setShowAddTaskForm(false);
  };

  const handleReset = (id) => {
    setTasks((prevTasks) => prevTasks.map(task => task.id === id ? { ...task, status: "not-started" } : task));
  };

  const handleStart = (id) => {
    setTasks((prevTasks) => prevTasks.map(task => task.id === id ? { ...task, status: "in-progress" } : task));
  };

  const handleComplete = (id) => {
    setTasks((prevTasks) => prevTasks.map(task => task.id === id ? { ...task, status: "completed" } : task));
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Study Board</h1>
          <p>
            Keep track of your study progress efficiently.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <StatsCard label="Total Tasks" value={tasks.length} />
          <StatsCard label="Completed Tasks" value={completedTasks} />
          <StatsCard label="In-Progress Tasks" value={inProgressTasks} />
          <StatsCard label="Not Started Tasks" value={notStartedTasks} />
        </div>
      </section>
      <section>
        <h2>Tasks</h2>
          <button onClick={() => setShowAddTaskForm(true)}>Create Task</button>
          {showAddTaskForm && <AddTaskForm onAdd={({ title, description }) => handleAdd(title, description)} />}
          {tasks.length === 0 && <p>You're all caught up!</p>}
          {tasks.map(task => (
            <TaskCard key={task.id} {...task} onReset={() => handleReset(task.id)} onStart={() => handleStart(task.id)} onComplete={() => handleComplete(task.id)} onDelete={() => handleDelete(task.id)} />
          ))}
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
