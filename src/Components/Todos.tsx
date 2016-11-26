import * as React from "react";

import AddItem from "./AddItem";
import List from "./List";
import Summary from "./Summary";
import Todo from "../Model/Todo";
import generateUniqueId from "../Utilities/UniqueId";

export interface TodosState {
    todos: Todo[]
}

export default class Todos extends React.Component<any, TodosState> {
    constructor(props: any) {
        super(props);
        this.state = {
            todos: [
                new Todo(generateUniqueId(), 'Buy milk'),
                new Todo(generateUniqueId(), 'Pay water bill'),
                new Todo(generateUniqueId(), 'Defeat Metroman'),
                new Todo(generateUniqueId(), 'Take over the world')
            ]
        };

        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleCompleteAllChange = this.handleCompleteAllChange.bind(this);
    }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <AddItem addTodo={this.addTodo}/>
                </header>
                <section className="main">
                    <input className="toggle-all" type="checkbox" onChange={this.handleCompleteAllChange}/>
    				<label htmlFor="toggle-all">Mark all as complete</label>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} removeTodo={this.removeTodo} />
                </section>
                <footer className="footer">
                    <Summary todos={this.state.todos}/>
                </footer>
            </section>
        );
    }

    addTodo(text: string) {
        this.setState((prevState, props) => {
            let todos = prevState.todos.slice();
            todos.push(new Todo(generateUniqueId(), text));
            return { todos: todos };
        });
    }

    removeTodo(todo: Todo) {
        this.setState((prevState, props) => {
            let todos = prevState.todos.slice();
            let index = todos.indexOf(todo);
            if (index > -1) {
                todos.splice(index, 1);
            }
            return { todos: todos };
        });
    }

    updateTodo(todo: Todo) {
        this.setState((prevState, props) => {
            let todos = prevState.todos.slice();

            let index = todos.indexOf(todo);
            if (index > -1) {
                todos.splice(index, 1, todo);
            }

            return { todos: todos };
        });
    }

    handleCompleteAllChange(event: React.FormEvent<any>) {
        let isComplete = (event.target as HTMLInputElement).checked;
        let todos = this.state.todos.map((todo: Todo) => {
            todo.complete = isComplete;
            return todo;
        });
        this.setState({ todos: todos });
    }
}
