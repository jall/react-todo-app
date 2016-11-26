import * as React from "react";

export default class Todo {
    public complete: boolean;

    constructor(
        public id: number,
        public text: string,
    ) {
        this.complete = false;
    }
}
