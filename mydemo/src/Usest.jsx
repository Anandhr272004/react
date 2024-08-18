import { useState } from 'react';

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState();
    const [Name, setName] = useState(" ");

    const [items, setItems] = useState(['Buy milk', 'Walk the dog']);
    const [newItem, setNewItem] = useState('');

    const [user, setUser] = useState({ name: '', email: '' });

    return (
        <div>
            <input type="checkbox" checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />

            <p>Toggle: {isChecked ? 'On' : 'Off'}</p>


           {/* second
        <input type='text' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
        <button type='button'> submit: {Name}</button> */}
 

        {/* third */}
            {/* <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={() => {
                if (newItem.trim()) {
                    setItems([...items, newItem]);
                    setNewItem('');  }}} > Add  </button>
                    <br /> */}

        {/* fourth */}
        {/* <input   type="text"  value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Enter your name" />
      <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your email" />
      <p>Hello, {user.name} ({user.email})!</p> */}
        </div>
    );
}

export default ToggleButton;