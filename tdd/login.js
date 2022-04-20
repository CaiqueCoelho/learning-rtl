import React from "react";

function Login({onSubmit}) {
    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault()
                const { username, password } = event.target.elements
                onSubmit({
                    username: username.value,
                    password: password.value
                })
            }}>
                <label htmlFor="username">Username</label>
                <input id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit">Submit</button>
                </form>
        </div>
    )
}

export {Login}