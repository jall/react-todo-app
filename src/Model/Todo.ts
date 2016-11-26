import * as React from "react";

export default class Todo {
    constructor(
        public id: number,
        public text: string,
        public complete: boolean = false
    ) {

    }
}
