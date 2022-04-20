import React from "react";
import { render } from 'react-dom'
import { Login } from "./login";

function App() {
    return <Login onSubmit={data => alert(JSON.stringify(data))} />
}

render(<App />, document.getElementById('root'))