import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/13339064/pexels-photo-13339064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <span>John</span>
        <button>Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
