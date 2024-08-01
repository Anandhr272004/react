import React, { useState, useEffect } from "react";

const Getmethod = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getdata = async () => {
        try {
            //Json 1
            const response = await fetch("https://reqres.in/api/users?delay=2");
            const jsonData = await response.json();
            setData(jsonData.data); // assuming the data is inside `data` property

            //json 2
            const json2 = await fetch("https://reqres.in/api/users/2");
            const jsonData1 = await json2.json();
            setData(jsonData1.data); // assuming the data is inside `data` property


        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // stop loading after the fetch is done
        }
    };

    useEffect(() => {
        getdata();
    }, []); // Empty dependency array means it runs only once after the initial render

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div>
            <h1>User Data:</h1>
            {data && (
                <div>
                    <p>ID: {data.id}</p>
                    <p>First Name: {data.first_name}</p>
                    <p>Last Name: {data.last_name}</p>
                    <p>Email: {data.email}</p>
                   <p> Image: <img src={data.avatar} alt={`${data.first_name} ${data.last_name}`} /></p>
                </div>
            )}
        </div>
    );
};

export default Getmethod;
