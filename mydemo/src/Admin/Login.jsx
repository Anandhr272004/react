// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login to Admin</h2>
//         <p>If you have an account, please login</p>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email Address</label>
//             <input 
//               type="email" 
//               placeholder="Enter Email Address" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input 
//               type="password" 
//               placeholder="Enter Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>
//           {/* <div className="forgot-password">
//             <a href="/forgot-password">Forgot Password?</a>
//           </div> */}
//           <button type="submit" className="login-button">Log In</button>
//         </form>
//         {/* <div className="separator">OR</div>
//         <p>If you don't have an account... <a href="/register">Register</a></p> */}
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
      // Navigate to another page
      window.location.href = '/dashboard'; // Change to your desired route
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>Administration</h1>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>🔒 Please enter your login details.</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username</label>
              <div className="input-wrapper">
                <span className="icon">👤</span>
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <span className="icon">🔒</span>
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="forgot-password">
              <a href="/forgot-password">Forgotten Password</a>
            </div>
            <button type="submit" className="login-button">🔍 Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
