import * as React from "react";

export interface SummaryProps {
    count: number;
}

export default class Summary extends React.Component<SummaryProps, any> {
    render() {
        return (
            <div className="summary">
                <span className="todo-count">{this.props.count} things to do!</span>
            </div>
        );
    }
}
