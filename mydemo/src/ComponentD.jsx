import { useContext } from "react"
import { send } from "./ComponentA"

const ComponentD = () => {

    const recive = useContext(send)

    return (
        <div className="Box">
            <h1>ComponentD</h1>
            <h1>{`${recive}`}</h1>
        </div>
    )
}
export default ComponentD