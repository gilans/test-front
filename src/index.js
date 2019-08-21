import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// comment this lines when you dont want to auto run ReactDOM.render
const el = document.getElementById("root");
ReactDOM.render(<App />, el);

/* uncomment this block to "defer" ReactDOM.render and expose it globaly
window.ReactCounter = {
    mount: () => {
        const el = document.getElementById('counter-app');
        ReactDOM.render(<Counter />, el);
    },
    unmount: () => {
        const el = document.getElementById('counter-app');
        ReactDOM.unmountComponentAtNode(el);
    }
}
*/
