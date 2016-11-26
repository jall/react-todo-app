import * as React from "react";

export const ENTER_KEY = 13;

export interface AddItemProps {
    addTodo: (text: string) => void;
}

export default class AddItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    render() {
        return <input type="text" placeholder="What needs doing?" className="new-todo" onKeyUp={this.onKeyUp} />;
    }

    onKeyUp(event: React.KeyboardEvent<any>) {
        if (event.keyCode !== ENTER_KEY) {
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
