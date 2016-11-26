import * as React from "react";

import { ENTER } from "../Constants/KeyboardCodes";
import Todo from "../Model/Todo";

export interface ListItemProps {
    todo: Todo;
    updateTodo: (todo: Todo) => void;
    removeTodo: (todo: Todo) => void;
}

export interface ListItemState {
    editing?: boolean;
    text?: string;
}

export default class ListItem extends React.Component<ListItemProps, ListItemState> {
    constructor(props: ListItemProps) {
        super(props);

        this.state = {
            editing: false,
            text: props.todo.text
        };

        this.handleCompleteCheckboxChange = this.handleCompleteCheckboxChange.bind(this);
        this.handleTodoTextClick = this.handleTodoTextClick.bind(this);
        this.handleEditInputChange = this.handleEditInputChange.bind(this);
        this.handleEditInputKeyUp = this.handleEditInputKeyUp.bind(this);
        this.handleEditInputBlur = this.handleEditInputBlur.bind(this);
    }

    render() {
        let inputName: string = `complete-todo-${this.props.todo.id}`;
        let itemClasses: string[] = [];

        if (this.props.todo.complete) {
            itemClasses.push('completed');
        }

        if (this.state.editing) {
            itemClasses.push('editing');
        }

        return (
            <li className={itemClasses.join(' ')}>
                {this.state.editing ? (
                    <input className="edit" autoFocus value={this.state.text} onChange={this.handleEditInputChange} onKeyUp={this.handleEditInputKeyUp} onBlur={this.handleEditInputBlur} />
                ) : (
                    <div className="view">
                        <input checked={this.props.todo.complete} onChange={this.handleCompleteCheckboxChange} type="checkbox" name={inputName} className="toggle" />
                        <label htmlFor={inputName} onClick={this.handleTodoTextClick}>{this.props.todo.text}</label>
                        <button className="destroy" onClick={() => this.props.removeTodo(this.props.todo)}></button>
                    </div>
                )}
            </li>
        );
    }

    handleCompleteCheckboxChange(event: React.FormEvent<any>) {
        this.props.todo.complete = (event.target as HTMLInputElement).checked;
        this.props.updateTodo(this.props.todo);
    }

    handleTodoTextClick(event: React.FormEvent<any>) {
        this.setState({ editing: true });
    }

    handleEditInputChange(event: React.FormEvent<any>) {
        this.setState({
            text: (event.target as HTMLInputElement).value
        });
    }

    handleEditInputKeyUp(event: React.KeyboardEvent<any>) {
        if (event.keyCode === ENTER) {
            this.finishEditing();
        }
    }

    handleEditInputBlur(event: React.FormEvent<any>) {
        this.finishEditing();
    }

    finishEditing() {
        this.props.todo.text = this.state.text;
        this.props.updateTodo(this.props.todo);
        this.setState({ editing: false });
    }
}
