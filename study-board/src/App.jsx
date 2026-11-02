import { useEffect, useRef, useState } from 'react'
import TaskCard from './TaskCard'
import StatsCard from './StatsCard'
import AddTaskForm from './AddTaskForm'
import Filters from './Filters'
import './App.css'
import EditTaskForm from './EditTaskForm'

const initialTasks = [
  { id: 0, status: "completed", title: "Task 1", description: "This is a sample task.", subject: "Math" },
  { id: 1, status: "in-progress", title: "Another Task", description: "This is another sample task.", subject: "Science" },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  const addTaskDialogRef = useRef(null);

  useEffect(() => {
    const dialog = addTaskDialogRef.current;

    if (showAddTaskForm && !dialog.open) {
      dialog.showModal();
    } else if (!showAddTaskForm && dialog.open) {
      dialog.close();
    }
  }, [showAddTaskForm]);

  const query = searchQuery.trim().toLowerCase();
  const matchesSearch = (task) => task.title.toLowerCase().includes(query)
    || task.description.toLowerCase().includes(query)
    || task.subject.toLowerCase().includes(query);
  const matchesStatus = (task) => statusFilter === 'all' || task.status === statusFilter;
  const visibleTasks = tasks.filter(task => matchesSearch(task) && matchesStatus(task));
  const completedTasks = tasks.filter(task => task.status === "completed").length;
  const notStartedTasks = tasks.filter(task => task.status === "not-started").length;
  const inProgressTasks = tasks.filter(task => task.status === "in-progress").length;

  const handleAdd = (title, description, subject) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), status: "not-started", title: title, description: description, subject: subject }
    ]);
    setShowAddTaskForm(false);
  };

  const handleSave = (id, changes) => {
    setTasks((prevTasks) => prevTasks.map(task => task.id === id ? { ...task, ...changes } : task));
    setEditingId(null);
  };

  function setStatus(id, status) {
    setTasks((prevTasks) => prevTasks.map(task => task.id === id ? { ...task, status: status } : task))
  }

  const handleReset = (id) => {
    setStatus(id, "not-started");
  };

  const handleStart = (id) => {
    setStatus(id, "in-progress");
  };

  const handleComplete = (id) => {
    setStatus(id, "completed");
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  return (
    <main className="app-shell">
      <header className="dashboard-hero">
        <div className="dashboard-hero__copy">
          <p className="eyebrow"><span aria-hidden="true">✦</span> YOUR STUDY SPACE</p>
          <h1>Study Board</h1>
          <p className="dashboard-hero__description">
            Small steps, bright ideas. Keep your learning moving forward.
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art__orbit">
            <span className="hero-art__sparkle">✳</span>
            <span className="hero-art__dot" />
          </div>
          <p>MAKE<br />ROOM<br />TO GROW</p>
        </div>
      </header>
      <section className="stats-grid" aria-label="Study progress">
          <StatsCard label="Total Tasks" value={tasks.length} />
          <StatsCard label="Completed Tasks" value={completedTasks} />
          <StatsCard label="In-Progress Tasks" value={inProgressTasks} />
          <StatsCard label="Not Started Tasks" value={notStartedTasks} />
      </section>
      <section className="tasks-section" aria-labelledby="tasks-title">
        <div className="tasks-heading">
          <div>
            <p className="eyebrow">YOUR PLAN</p>
            <h2 id="tasks-title">Study tasks</h2>
          </div>
          <p className="tasks-heading__count">
            {visibleTasks.length} {visibleTasks.length === 1 ? 'task' : 'tasks'} in view
          </p>
        </div>
        <Filters searchText={searchQuery} onSearch={(query) => setSearchQuery(query)} statusFilter={statusFilter} onStatusChange={(status) => setStatusFilter(status)} />
        <div className="task-list">
          {tasks.length === 0 && <p className="task-list__message">You're all caught up!</p>}
          {visibleTasks.length === 0 && tasks.length > 0 && <p className="task-list__message">No tasks match your search.</p>}
          {visibleTasks.map(task => (
            task.id === editingId
              ? <EditTaskForm key={task.id} task={task} onSave={(changes) => {
                  handleSave(task.id, changes);
                }} onCancel={() => setEditingId(null)} />
              : <TaskCard key={task.id} {...task} onEdit={() => setEditingId(task.id)} onReset={() => handleReset(task.id)} onStart={() => handleStart(task.id)} onComplete={() => handleComplete(task.id)} onDelete={() => handleDelete(task.id)} />
          ))}
          <button className="task-list__add" type="button" aria-label="Create task" onClick={() => setShowAddTaskForm(true)}><span aria-hidden="true">+</span></button>
        </div>
        <dialog ref={addTaskDialogRef} className="task-dialog" aria-labelledby="task-dialog-title" onClose={() => setShowAddTaskForm(false)}>
          <h2 id="task-dialog-title">Create Task</h2>
          {showAddTaskForm && <AddTaskForm onAdd={({ title, description, subject }) => handleAdd(title, description, subject)} onCancel={() => setShowAddTaskForm(false)} />}
        </dialog>
      </section>
    </main>
  )
}

export default App
