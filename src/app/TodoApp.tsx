"use client"
import { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskText, setTaskText] = useState('');

    const handleTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
    };

    const addTask = () => {
        const trimmedText = taskText.trim();
        if (trimmedText === '') return;

        setTasks([...tasks, trimmedText]);
        setTaskText('');
    };

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className='bg-blue-400 h-1/2 w-1/2 my-auto grid justify-center rounded-xl shadow-xl' >
            <h1 className="text-center text-3xl mt-4 font-bold">Your best task managing buddy</h1>
            <div className="container h-1/3 w-full flex flex-wrap justify-around gap-3">
                <input className='h-5/6 w-4/6 outline outline-slate-100 rounded-full pl-2'
                    type="text"
                    id="taskinput"
                    placeholder="Enter a task"
                    value={taskText}
                    onChange={handleTaskInput}
                />
                <button
                    className="bg-indigo-600 flex items-center justify-center text-lg p-3 font-bold text-white h-5/6 my-auto rounded-full hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
                    id="addbutton"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
            <div className="mt-4">
    <ul className="space-y-2">
        {tasks.map((task, index) => (
            <li
                key={index}
                className="flex items-center justify-between bg-white px-4 py-2 rounded-md shadow-md"
            >
                <span>{task}</span>
                <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => deleteTask(index)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
</div>

        </div>
    );
};

export default TodoApp;