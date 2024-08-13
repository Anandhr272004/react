import { useState, useEffect } from "react";

const Cityes = () => {
    const [City, setCity] = useState(" ");
    useEffect(() => {
        setCity('cbe')
    }, []);

    const town = ["cbe", "trichy", "erode"];
    return (
        <div>
            <select 
            // value={City} onChange={(e)=>setCity(e.target.val)}
            >
                {town.map((town) => (
                    <option key={town} value={town}>
                    {town}
                </option>
                ))}

            </select>
        </div>
    )


}
export default Cityes;