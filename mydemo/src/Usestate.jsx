import React, { useState } from 'react';

function Usestate() {
    const [form, setform] = useState({
        username: '',
        password: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log("Username:", form.username);
        console.log("Password:", form.password);
    };


    const updateField = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={printValues}>
            <label>
                Username:
                <input
                    value={form.username}
                    name="username"
                    onChange={updateField}
                    type="text"
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    value={form.password}
                    name="password"
                    type="password"
                    onChange={updateField}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Usestate;