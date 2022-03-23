import React  from "react";
import ReactDOM  from "react-dom";

const element = (
    <div>
        <h1>Hello world!</h1>
        <p>desccription</p>
        <input type="button" value="send-email" />
    </div>
);

const Element2 = () => {
    const a = 5;
    const b = 6;
    const result = a + b;

    return (
        <div>
            <h1>Element 2</h1>
            <p>{result}</p>
            <input type="button" value="send-email" />
        </div>
    );
};

class Element3 extends React.Component {
    render() {
        const a = 5;
        const b = 6;
        const result = a + b;

        return (
            <div>
                <h1>Counter</h1>
                <Element2 />
            </div>
        );
    };
}

ReactDOM.render(<Element3 />, document.getElementById("root"));