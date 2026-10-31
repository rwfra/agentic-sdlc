import { useState, useId } from 'react'

export default function AddTaskForm(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subject, setSubject] = useState('');
    const id = useId()

    return (
        <div>
            <form className="task-form" onSubmit={(e) => {
                e.preventDefault();
                const cleanTitle = title.trim()

                if (!cleanTitle) {
                    return;
                }

                const cleanDescription = description.trim()
                const cleanSubject = subject.trim()
                props.onAdd({ title: cleanTitle, description: cleanDescription, subject: cleanSubject });
                setTitle('');
                setDescription('');
                setSubject('');
            }}>
                <label htmlFor={`${id}-title`}>Title</label>
                <input type="text" id={`${id}-title`} name="title" placeholder="Task Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor={`${id}-subject`}>Subject</label>
                <input type="text" id={`${id}-subject`} name="subject" placeholder="Task Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                <label htmlFor={`${id}-description`}>Description</label>
                <input type="text" id={`${id}-description`} name="description" placeholder="Task Description" required value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </form>
        </div>
    );
}