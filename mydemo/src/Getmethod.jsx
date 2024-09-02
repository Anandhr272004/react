import React, { useState } from "react";

const Getmethod = () => {
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getdata = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://reqres.in/api/users?delay=2");
            const jsonData = await response.json();
            setValue(jsonData.data);
            console.log(value);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>User Data:</h1>
            <button onClick={getdata}>Click to get user data</button>
            {loading ? <h1>Loading...</h1> : null}
            {error ? <h1>Error: {error}</h1> : null}
            {value.map((use) => (
                <div>
                    <p>ID: {use.id}</p>
                    <p>First Name: {use.first_name}</p>
                    <p>Last Name: {use.last_name}</p>
                    <p>Email: {use.email}</p>
                    <p>Image: <img src={use.avatar} alt={`${use.first_name} ${use.last_name}`} /></p>
                </div>
            ))}
        </div>
    );
};

export default Getmethod;