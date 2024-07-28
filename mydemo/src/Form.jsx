import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    // Call API or perform login logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username:</label>
      <input
        type="text"
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        })}
      />
      {errors.username && <div>{errors.username.message}</div>}

      <label>Password:</label>
      <input
        type="password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        })}
      />
      {errors.password && <div>{errors.password.message}</div>}

      <button type="submit">Login</button>
    </form>
  );
};

export default Form;