import * as React from "react";

export default class Todo {
    public done: boolean;

    constructor(
        public id: number,
        public text: string,
    ) {
        this.done = false;
    }
}
