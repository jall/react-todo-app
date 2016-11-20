import * as React from "react";

import Todo from "../Model/Todo";

export interface ListItemProps {
    todo: Todo;
}

export default class ListItem extends React.Component<ListItemProps, any> {
    render() {
        return <li><p>{this.props.todo.text}</p></li>;
    }
}
