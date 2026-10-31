import { useState } from 'react'

export default function AddTaskForm(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
        <form className="add-task-form" onSubmit={(e) => {
            e.preventDefault();
            props.onAdd({ title, description });
            setTitle('');
            setDescription('');
        }}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Task Title" required value={title} onChange={(e) => setTitle(e.target.value.trim())} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" placeholder="Task Description" required value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}