import * as React from "react";

import Todo from "../Model/Todo";

export interface ListItemProps {
    todo: Todo;
    updateTodo: (todo: Todo) => void;
    removeTodo: (todo: Todo) => void;
}

export default class ListItem extends React.Component<ListItemProps, any> {
    render() {
        let inputName: string = `complete-todo-${this.props.todo.id}`;

        return (
            <li className={this.props.todo.done ? 'completed' : ''}>
                <div className="view">
                    <input defaultChecked={this.props.todo.done} onChange={this.handleChange} type="checkbox" name={inputName} className="toggle" />
                    <label htmlFor={inputName}>{this.props.todo.text}</label>
                    <button className="destroy" onClick={() => this.props.removeTodo(this.props.todo)}></button>
                </div>
            </li>
        );
    }

    handleChange(event: React.FormEvent<any>) {
        this.props.todo.done = (event.target as HTMLInputElement).checked;
        this.props.updateTodo(this.props.todo);
    }
}
