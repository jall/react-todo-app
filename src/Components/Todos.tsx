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
        this.removeTodo = this.removeTodo.bind(this);
    }

    render() {
        return (
            <div className="todos">
                <AddItem addTodo={this.addTodo}/>
                <List todos={this.state.todos} removeTodo={this.removeTodo} />
                <Summary count={this.state.todos.length}/>
            </div>
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
}
