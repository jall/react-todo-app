import * as React from "react";

import ListItem from "./ListItem";
import Todo from "../Model/Todo";

export interface ListProps {
    todos: Todo[];
}

export default class List extends React.Component<ListProps, any> {
    render() {
        return (
            <ul className="todo-list">
                {this.getListItems()}
            </ul>
        );
    }

    getListItems() {
        return this.props.todos.map((todo) => <li key={todo.text}><ListItem todo={todo}/></li>)
    }
}
