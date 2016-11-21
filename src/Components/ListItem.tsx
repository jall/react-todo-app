import * as React from "react";

import Todo from "../Model/Todo";

export interface ListItemProps {
    todo: Todo;
    removeTodo: (todo: Todo) => void;
}

export default class ListItem extends React.Component<ListItemProps, any> {
    render() {
        return <li><p>{this.props.todo.text}<span className="remove-todo" onClick={() => this.props.removeTodo(this.props.todo)}>&times;</span></p></li>;
    }
}
