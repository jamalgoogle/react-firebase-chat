import './detail.css'

import React from 'react'

function Detail() {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jamal Google</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png " alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png " alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png " alt="" />
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>
          </div>
          {/* <div className="photos">
            <div className="PhotoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>
          </div> */}
          {/* <div className="photos">
            <div className="PhotoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>
          </div>
          <div className="photos">
            <div className="PhotoItem">
              <div className="photoDetail">
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>
          </div> */}
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png " alt="" />
          </div>
          <button>Block User</button>
        </div>
      </div>
    </div>
  )
}

export default Detail