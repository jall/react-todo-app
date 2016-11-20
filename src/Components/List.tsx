import * as React from "react";

import ListItem from "./ListItem";
import Todo from "../Model/Todo";

export interface ListProps {
    todos: Todo[];
}

export default class List extends React.Component<ListProps, any> {
    render() {
        const items = this.props.todos.map((todo) =>
            <ListItem todo={todo} key={todo.id.toString()} />
        );

        return (
            <ul className="todo-list">
                {items}
            </ul>
        );
    }
}
