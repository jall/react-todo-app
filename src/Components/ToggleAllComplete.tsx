import * as React from "react";

import Todo from "../Model/Todo";

export interface ToggleAllCompleteProps {
    setCompletionForAll: (complete: boolean) => void;
    todos: Todo[];
}

export default class ToggleAllComplete extends React.Component<ToggleAllCompleteProps, any> {
    constructor(props: any) {
        super(props);
        this.handleCompleteAllChange = this.handleCompleteAllChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    render() {
        return (
            <div>
                <input className="toggle-all" type="checkbox" checked={this.isChecked()} onChange={this.handleCompleteAllChange} />
                <label htmlFor="toggle-all">Mark all as complete</label>
            </div>
        );
    }

    handleCompleteAllChange(event: React.FormEvent<any>) {
        let isComplete = (event.target as HTMLInputElement).checked;
        this.props.setCompletionForAll(isComplete);
    }

    isChecked(): boolean {
        return this.areAllTodosComplete();
    }

    areAllTodosComplete(): boolean {
        return this.props.todos.every((todo: Todo) => todo.complete);
    }

}
