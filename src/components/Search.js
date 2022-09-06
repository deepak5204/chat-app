import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find a user' />
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/13339064/pexels-photo-13339064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <div className='userChatInfo'></div>
        <span>Jane</span>
      </div>
      
    </div>
  )
}

export default Search
