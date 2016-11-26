import * as React from "react";

import Todo from "../Model/Todo";

export interface SummaryProps {
    todos: Todo[];
}

export default class Summary extends React.Component<SummaryProps, any> {
    render() {
        let count = this.countIncompleteTodos();

        return (
            <span className="todo-count">
                <strong>{count}</strong> {count > 1 ? 'items' : 'item'} left
            </span>
        );
    }

    countIncompleteTodos() {
        return this.props.todos.filter((todo: Todo) => !todo.complete).length;
    }
}
