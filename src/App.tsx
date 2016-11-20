import * as React from "react";
import Hello from "./Components/Hello"

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Hello name="Jon" />
        )
    }
}
