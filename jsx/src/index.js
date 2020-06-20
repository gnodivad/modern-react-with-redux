import React from 'react';
import ReactDom from "react-dom";

const App = () => {
    return (
        <div>
            <label for="name" class="label">Enter name:</label>
            <input type="text" id="name" />
            <button style="background-color: blue; color: white;"></button>
        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);