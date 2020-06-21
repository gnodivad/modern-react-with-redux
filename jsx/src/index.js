import React from 'react';
import ReactDom from "react-dom";

function getButtonText() {
    return 'Click on me!';
}

const App = () => {
    return (
        <div>
            <label for="name" className="label">Enter name:</label>
            <input type="text" id="name" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);