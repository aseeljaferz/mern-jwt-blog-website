import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2024/03/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large_.jpg?w=1390&crop=1" alt="" />
        </div>
        <div className="texts ">
          <h2>Apple announces new 13-inch and 15-inch MacBook Air models with M3 chip</h2>
          <p className="info">
            <a className="author">Aseel Jafer Z</a>
            <time> 2024-03-06 10:23</time>
          </p>
          <p className='summary'>Apple announced new MacBook Air models with 13-inch and 15-inch screen sizes with its own M3 chip. </p>
        </div>
      </div>
  )
}

export default Post