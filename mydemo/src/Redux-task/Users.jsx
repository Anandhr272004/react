import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from './Slice';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const usersone = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (index) => {
    dispatch(removeUser(index));
  };

  return (
    <div>
      <h1>User Page</h1>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
      {usersone && usersone.length > 0 ? (
        <ul>
          {usersone.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
              <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default User;
