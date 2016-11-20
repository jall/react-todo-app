import * as React from "react";

import AddItem from "./AddItem";
import List from "./List";
import Summary from "./Summary";
import Todo from "../Model/Todo";

export default class Todos extends React.Component<any, any> {
    render() {
        return (
            <div className="todos">
                <AddItem />
                <List todos={this.getTodos()}/>
                <Summary count={this.getTodos().length}/>
            </div>
        );
    }

    getTodos() {
        return [
            new Todo(1, 'Buy milk'),
            new Todo(2, 'Pay water bill'),
            new Todo(3, 'Defeat Metroman'),
            new Todo(4, 'Take over the world')
        ];
    }
}
