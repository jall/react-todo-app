import * as React from "react";
import Todos from "./Components/Todos";

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div className="wrapper">
                <h1>Todos</h1>
                <Todos />
            </div>
        )
    }
}
