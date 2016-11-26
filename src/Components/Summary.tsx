import * as React from "react";

import Todo from "../Model/Todo";

export interface SummaryProps {
    todos: Todo[];
    clearCompletedTodos: () => void;
}

export default class Summary extends React.Component<SummaryProps, any> {
    render() {
        let incompleteCount = this.countIncompleteTodos();
        let completeCount = this.countCompleteTodos();

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{incompleteCount}</strong> {incompleteCount === 1 ? 'item' : 'items'} left
                </span>
                {completeCount > 0 &&
                    <button className="clear-completed" onClick={() => this.props.clearCompletedTodos()}>Clear completed</button>
                }
            </footer>
        );
    }

    countIncompleteTodos() {
        return this.props.todos.filter((todo: Todo) => !todo.complete).length;
    }

    countCompleteTodos() {
        return this.props.todos.filter((todo: Todo) => todo.complete).length;
    }
}
