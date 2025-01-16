import React, { useState } from "react";
import Table from "./components/Table";

const TodoApp = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Buy groceries for next week", status: "In progress", description: "In progress" },
        { id: 2, title: "Renew car insurance", status: "In progress", description: "In progress" },
        { id: 3, title: "Sign up for online course", status: "In progress", description: "In progress" },
    ]);

    const [newTask, setNewTask] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === "") return;
        const newTaskObj = {
            id: tasks.length + 1,
            title: newTask,
            status: "In progress",
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask("");
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="h-100 min-vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container-xxl ">
                <div className="row d-flex flex-row justify-content-between pb-6 px-20">
                    <h1 className="text-center ">Products</h1>
                </div>
            </div>

            <Table tasks={tasks} handleDeleteTask={handleDeleteTask} handleAddTask={handleAddTask} />
        </div>
    );
};

export default TodoApp;
