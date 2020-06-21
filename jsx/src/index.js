import React from 'react';
import ReactDom from "react-dom";

const App = () => {
    const buttonText = { text: 'Click Me!' };
    const labelText = 'Enter name:';

    return (
        <div>
            <label for="name" className="label">{labelText}</label>
            <input type="text" id="name" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);