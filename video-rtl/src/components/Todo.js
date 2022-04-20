import React, { useState } from 'react';

const Todo = () => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = event => setTask(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();
        setTasks([...tasks, task]);
        setTask('');
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input 
                    data-testid="form-field"
                    onChange={handleInputChange}
                    placeholder="Type a new task here"
                    value={task}
                    type="text"
                />
                <button data-testid="form-btn" type="submit">Add new task</button>
            </form>
            <table data-testid='table'>
                <thead>
                    <tr>
                        <th>Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map( (task, index) => (
                        <tr key={index}>
                            <td>{task}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Todo;