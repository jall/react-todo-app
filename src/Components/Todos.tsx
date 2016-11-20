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
    }

    render() {
        return (
            <div className="todos">
                <AddItem addTodo={this.addTodo}/>
                <List todos={this.state.todos}/>
                <Summary count={this.state.todos.length}/>
            </div>
        );
    }

    addTodo(text: string) {
        let todos = this.state.todos;
        todos.push(new Todo(generateUniqueId(), text));
        this.setState({ todos: todos });
    }
}
