import React from "react";
import ModalComponent from "./Modal";

const Table = ({ tasks, handleDeleteTask, handleAddTask }) => {
    return (
        <section className="">
            <div className="container-xs h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card rounded-3">
                            <div className="card-body px-4">
                                <ModalComponent tasks={tasks} handleDeleteTask={handleDeleteTask} handleAddTask={handleAddTask} />
                                <h4 className="text-center my-3 pb-3">To Do App</h4>
                                <table className="table mb-4">
                                    <thead>
                                        <tr>
                                            <th scope="col">№</th>
                                            <th scope="col">title</th>
                                            <th scope="col">price</th>
                                            <th scope="col">description</th>
                                            <th scope="col">actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks.map((task, index) => (
                                            <tr key={task.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{task.title}</td>
                                                <td>{task.title}</td>
                                                <td>{task.status}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => handleDeleteTask(task.id)}>
                                                        Update
                                                    </button>
                                                    <button className="btn btn-danger mx-2" onClick={() => handleDeleteTask(task.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Table;
