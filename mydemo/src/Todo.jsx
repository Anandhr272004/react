
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addUser, toggleUser, removeUser } from './Appone/Slice'; 

function Todo() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const users = useSelector((state) => state.users); 
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset(); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Todo-list</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          placeholder="Enter name"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        <br />
        
        <label>Email-id:</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          placeholder="Enter email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <br />
        
        <label>Age:</label>
        <input
          type="number"
          {...register('age', {
            required: 'Age is required',
            min: { value: 1, message: 'Age must be at least 1' },
          })}
          placeholder="Enter age"
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
        <br />
        
        <button type="submit">Add User</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id}>
            <span
              onClick={() => dispatch(toggleUser(user.id))}
              style={{
                textDecoration: user.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              Name: {user.name} <br /> Email-id: {user.email} <br /> Age: {user.age} years old
            </span>
            <br />
            <button onClick={() => dispatch(removeUser(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

