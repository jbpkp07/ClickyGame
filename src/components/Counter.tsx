import React, { ReactNode } from "react";

interface IProps {

    initialCount: number;
    name: string;
    groc: any[];
}

interface IState {

    count: number;
    name: ReactNode;
    groc: object[];
}

export class Counter extends React.Component<IProps> {

    public readonly state: IState = {

        count: this.props.initialCount,
        name: this.props.children,
        groc: this.props.groc
    };

    // public readonly state: IState;

    // public constructor(props: IProps) {

    //     super(props);

    //     this.state = {

    //         count: this.props.initialCount,
    //         name: this.props.name
    //     };
    // }

    public render(): JSX.Element {

        // const notPurchased: any[] = this.props.groc.filter((grocery: any) => !grocery.purchased);

        return (
            <div className="card text-center">
                <div className="card-header bg-primary text-white">Click Counter!</div>
                <div className="card-body">
                    <p className="card-text">Click Count: {this.state.count}</p>
                    <p className="card-text">Name: {this.state.name}</p>
                    <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
                    <ul>
                        {this.state.groc.map((item: any) => (
                            <li className="list-group-item" key={item.id}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    private readonly handleIncrement = (): void => {
        console.log(this.state.name);
        this.state.groc.pop();

        const newState: IState = {

            count: this.state.count + 1,
            name: this.state.name,
            groc: this.state.groc
        };

        this.setState(newState);
    }
}
