import React from 'react'

const NavBar = ({showLoginHandler, showRegisterHandler, showLogout, logOutHandler}) => {

  const firmName = localStorage.getItem('firmName')
  return (
    <div>
      <div className="navSection">
        <div className="company">
          Vendor Dashboard
        </div>
        <div className="firmName">
          <p>Firm name : {firmName}</p>
        </div>
          <div className="userAuth">
            {!showLogout ? 
              <>
              <span onClick={showLoginHandler}>Login / </span>
              <span onClick={showRegisterHandler}>Register</span>
              </>
            : <span onClick={logOutHandler}>Logout</span>}
            
            
            
          </div>
        
      </div>
    </div>
  )
}

export default NavBar
