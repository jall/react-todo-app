import * as React from "react";

import Todo from "../Model/Todo";

export interface SummaryProps {
    todos: Todo[];
}

export default class Summary extends React.Component<SummaryProps, any> {
    render() {
        return (
            <span className="todo-count">
                <strong>{this.countIncompleteTodos()}</strong> items left
            </span>
        );
    }

    countIncompleteTodos() {
        return this.props.todos.filter((todo: Todo) => !todo.done).length;
    }
}
