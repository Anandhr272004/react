import { Link, Routes, Route } from "react-router-dom";


const Home = () => {
    return(
    <div>
        <h1>hello</h1>

    </div>
    );
};
const About = () => {
    return(
        <div>
            <h1>about</h1>
        </div>
    
    );
};
const Contact = () => {
    return(
    <div>
        <h1>contact</h1>
    </div>
    );

};
export default function Routerone() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home  />} />
                <Route path="/about" element={<About  />  } />
                <Route path="/contact" element={<Contact  />} />
            </Routes>

        </div>
    );
}