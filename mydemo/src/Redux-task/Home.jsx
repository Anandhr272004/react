import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './Slice';

const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            dispatch(addUser({ name, email }));
            navigate('/user');
            alert('value saved successfully');
        } else {
            alert('Please enter both name and email');
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => navigate('/user')}>Go to User Page</button>
        </div>
    );
};

export default Home;
