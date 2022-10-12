import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Hello = () => {
    return <p>Hello World!</p>;
};

class HelloStateFull extends React.Component {
    render() {
        return <p>Hello world</p>;
    }
}

root.render(
    <React.StrictMode>
        <HelloStateFull />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
