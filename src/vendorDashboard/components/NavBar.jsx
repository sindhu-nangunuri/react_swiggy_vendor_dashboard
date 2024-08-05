import React from 'react'

const NavBar = ({showLoginHandler, showRegisterHandler}) => {
  return (
    <div>
      <div className="navSection">
        <div className="company">
          Vendor Dashboard
        </div>
          <div className="userAuth">
            <span onClick={showLoginHandler}>Login /</span>
            <span onClick={showRegisterHandler}>Register</span>
          </div>
        
      </div>
    </div>
  )
}

export default NavBar
