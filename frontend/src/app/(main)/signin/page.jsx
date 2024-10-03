'use client'
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // You can add logic for form submission or validation here
    alert(`Logged in with: ${email}`);
  };

  return (
   
    <div style={styles.container}>  
      <div style={styles.leftPane}>
        <div style={styles.mobileView}>
          <img src="https://htmlburger.com/blog/wp-content/uploads/2021/10/Login-Design-Example-15.png" style={styles.image} />
          <h1 style={styles.heading}>Explore your new skills today</h1>
          <p style={styles.subheading}>
            You can learn various kinds of courses in your hand
          </p>
        </div>
      </div>

      <div style={styles.rightPane}>
        <h2 className='text-font'>Log in to React</h2>
        <p>Welcome back! Login with your data that you entered during registration</p>

        <div style={styles.socialButtons}>
          <button style={{ ...styles.socialButton, backgroundColor: '#db4437' }}>
            Login with Google
          </button>
          <button style={{ ...styles.socialButton, backgroundColor: '#3b5998' }}>
            Login with Facebook
          </button>
        </div>

        <div style={styles.divider}>or</div>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={styles.forgotPassword}>Forgot your password?</a>
          </div>

          <button type="submit" style={styles.loginButton}>
            LOGIN
          </button>
        </form>

        <p>
          Don’t have an account? <a href="#" style={styles.registerLink}>Register</a>
        </p>
      </div>
    </div>
    
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  leftPane: {
    backgroundColor: '#543A8E',
    color: '#fff',
    padding: '50px',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileView: {
    textAlign: 'center',
  },
  image: {
    width: '200px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '16px',
  },
  rightPane: {
    backgroundColor: '#fff',
    padding: '50px',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  socialButton: {
    padding: '10px 20px',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    width: '48%',
    cursor: 'pointer',
  },
  divider: {
    textAlign: 'center',
    margin: '20px 0',
    color: '#888',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  forgotPassword: {
    color: '#FF6F61',
    textDecoration: 'none',
  },
  loginButton: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#FF6F61',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  registerLink: {
    color: '#FF6F61',
    textDecoration: 'none',
  },
};

export default LoginPage;
