import React from 'react';

function Login() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo" >Lama Chat</span>
        <span className='title'>Login</span>
        <form>
            <input type="email" placeHolder="email" />
            <input type="password" placeHolder="password" />

            <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>

      </div>

    </div>
  )
}

export default Login;
