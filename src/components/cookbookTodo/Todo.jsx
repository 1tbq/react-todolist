import React, { Component } from 'react';
import List from './List';
import './Todo.css';
class Todo extends Component {
    // constructor() {
    //     super();
    // Initial state...
    state = {
        task: '',
        items: [],
        completed: false
    };
    // }
    // componentWillMount() {
    //     // Setting default tasks...
    //     this.setState({
    //         items: [
    //             {
    //                 id: Math.random(),
    //                 task: 'Pay the rent',
    //                 completed: false
    //             },
    //             {
    //                 id: Math.random(),
    //                 task: 'Go to the gym',
    //                 completed: false
    //             },
    //             {
    //                 id: Math.random(),
    //                 task: 'Do my homework',
    //                 completed: false
    //             }
    //         ]
    //     });
    // }
    handleOnChange = e => {
        const { target: { value } } = e;
        // Updating our task state with the input value...
        this.setState({
            task: value
        });
    }
    handleOnSubmit = e => {
        e.preventDefault();
        if (this.state.task.trim() !== '') {
            this.setState({
                items: [
                    ...this.state.items,
                    {
                        id: Math.random(),
                        task: this.state.task,
                        complete: false
                    }
                ],
                task: '',
            });
        }
    }

    markAsCompleted = id => {
        // Finding the task by id...
        const foundTask = this.state.items.find(
            task => task.id === id
        );
        // Updating the completed status...
        foundTask.completed = true;
        // Updating the state with the new updated task...
        this.setState({
            items: [
                ...this.state.items
            ]
        });
    }

    // markAsCompleted = id => {
    //     this.setState({
    //       todos: this.state.items.map(todo => {
    //         if (todo.id === id) {
    //            todo.completed = true 
    //         }
    //         return todo;
    //       })
    //     });
    //   };




    removeTask = id => {
        // Filtering the tasks by removing the specific task id...
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );
        // Updating items state...
        this.setState({
            items: filteredTasks
        });
    }
    render() {
        return (
            <div className="Todo">
                <h1>New Task:</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value={this.state.task}
                        onChange={this.handleOnChange}
                    />
                </form>
                <List
                    items={this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }
}
export default Todo;
