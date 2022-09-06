import React from 'react';
import Add from "../img/add.png";

function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo" >Lama Chat</span>
        <span className='title'>Register</span>
        <form>
            <input type="text" placeHolder="display name" />
            <input type="email" placeHolder="email" />
            <input type="password" placeHolder="password" />
            <input style={{display: "none"}} type ="file" id='file' />
            <label htmlFor="file">
            
                <img src={Add} alt="" />
                <spn>Add an avatar</spn>
            </label>
            <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>

      </div>

    </div>
  )
}

export default Register
