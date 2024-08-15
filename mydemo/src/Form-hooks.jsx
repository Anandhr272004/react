import React from "react";
import { useForm } from "react-hook-form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Formhooks = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  }

  const registerOptions = {
    name: {
      required: "Name is required",
      pattern: {
        value: /^[a-zA-Z ]{2,30}$/,
        message: "Enter valid Name"
      }
    },

    username: {
      required: "username is required",
      pattern: {
        value: /^[a-zA-Z ]{2,30}$/,
        message: "Enter a valid name"
      }
    },

    email: {
      required: "Email is required",
      pattern: {
        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        message: "Invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "invalid password"
      }
    },
    cpassword: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "invalid password"
      }
    },
    number: {
      required: "number is required",
      pattern: {
        value: /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/,
        message: "Invalid phone number"
      }
    },
    gender: {
      required: "Gender is required",
    },
    terms: {
      required: 'Please accept the terms and conditions',
    },
  };

  return (
    <div className="container">
      <div class="title">Registration</div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div class="user-details">

          <Row>
            <Col xs={12} md={6}><div>
              <label className="details">Name</label>
              <input name="name" type="text" className="input" placeholder="Enter your name" {...register('name', registerOptions.name)} /><br />
              <div className="text-danger">
                {errors?.name && errors.name.message}
              </div>

            </div></Col>
            <Col xs={12} md={6}>
              <div>
                <label className="details">UserName</label>
                <input
                  type="username"
                  name="username"
                  className="input"
                  placeholder="Enter your username"
                  {...register('username', registerOptions.username)} /><br />
                <div className="text-danger">
                  {errors?.username && errors.username.message}
                </div>
              </div></Col></Row><br />
          <Row>
            <Col xs={12} md={6}><div>
              <label className="details">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
                {...register('email', registerOptions.email)} /><br />
              <div className="text-danger">
                {errors?.email && errors.email.message}
              </div>
            </div></Col>
            <Col xs={12} md={6}><div>
              <label className="details">Phone Number</label>
              <input
                type="text"
                name="number"
                className="input"
                placeholder="Enter your phone number"
                {...register('number', registerOptions.number)} /><br />
              <div className="text-danger">
                {errors?.number && errors.number.message}
              </div>
            </div></Col></Row>
          <br />
          <Row>
            <Col xs={12} md={6}><div>
              <label className="details">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your password"
                {...register('password', registerOptions.cpassword)} /><br />
              <div className="text-danger">
                {errors?.password && errors.password.message}
              </div>
            </div></Col>
            <Col xs={12} md={6}><div>
              <label className="details">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                className="input"
                placeholder="Confirm your password"
                {...register('cpassword', registerOptions.cpassword)} /><br />
              <div className="text-danger">
                {errors?.cpassword && errors.cpassword.message}
              </div>
            </div></Col>
          </Row>
          <br />
        </div>
        <Row>
          <Col xs={12}>
            <label className="rad">Gender :
              <input type="radio" name="gender" className="radi" value="male" {...register('gender', registerOptions.gender)} />Male
              <input type="radio" name="gender" className="radi" value="female" {...register('gender', registerOptions.gender)} />Female
              <input type="radio" name="gender" className="radi" value="other" {...register('gender', registerOptions.gender)} />Other
            </label>
            <div className="text-danger">
              {errors?.gender && errors.gender.message}
            </div>
          </Col>
        </Row>

        <Col xs={12}>
          <div>
            <label>
              <input
                type="checkbox"
                name="terms"
                className="check"
                {...register('terms', registerOptions.terms)} />
              Accept Terms and Conditions
            </label>
            <div className="text-danger">
              {errors?.terms && errors.terms.message}
            </div>
          </div>
        </Col>
        <button className="button">Submit</button>

      </form></div>
  );
};
export default Formhooks;