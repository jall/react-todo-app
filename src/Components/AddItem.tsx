import * as React from "react";

import { ENTER } from "../Constants/KeyboardCodes";

export interface AddItemProps {
    addTodo: (text: string) => void;
}

export default class AddItem extends React.Component<AddItemProps, any> {
    constructor(props: AddItemProps) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    render() {
        return <input type="text" placeholder="What needs doing?" className="new-todo" onKeyUp={this.onKeyUp} autoFocus />;
    }

    onKeyUp(event: React.KeyboardEvent<any>) {
        if (event.keyCode !== ENTER) {
            return;
        }

        event.preventDefault();
        let text = event.currentTarget.value.trim();

        if (text) {
            this.props.addTodo(text);
            event.currentTarget.value = '';
        }
    }
}
