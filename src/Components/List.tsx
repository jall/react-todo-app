import * as React from "react";

import ListItem from "./ListItem";
import Todo from "../Model/Todo";

export interface ListProps {
    todos: Todo[];
    removeTodo: (todo: Todo) => void;
}

export default class List extends React.Component<ListProps, any> {
    render() {
        const items = this.props.todos.map((todo) =>
            <ListItem todo={todo} removeTodo={this.props.removeTodo} key={todo.id.toString()} />
        );

        return (
            <ul className="todo-list">
                {items}
            </ul>
        );
    }
}
