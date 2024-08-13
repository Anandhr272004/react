import { useState } from "react";

const Getone = () => {

    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);

    const data = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://reqres.in/api/users?delay=1");
            const responseone = await response.json();
            setData(responseone.data);
        } catch (error) {
            setError(error);

        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <button onClick={data}>click</button>
            {Loading ? <h1>Loading...</h1> : null}
            {Error ? <h1>Error..</h1> : null}
            {Data.map((date) => (
                <div>
                id: {date.id}<br></br>
                name: {date.first_name} {date.last_name}

                </div>

            ))}
        </div>
    )

}
export default Getone;