import React , {useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'

const LandingPage = () => {
  const [showLogin, setShowLogin]= useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  const showLoginHandler = () => {
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
  }

  const showRegisterHandler = () => {
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
  }

  const showFirmHandler = () => {
    setShowFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowProduct(false)
    setShowWelcome(false)
  }

  const showProductHandler = () => {
    setShowProduct(true)
    setShowFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowWelcome(false)
  }

  const showWelcomeHandler = () => {
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(true)
  }
  
  return (
    <div>
      <section>
        <>
        <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler}  />
        <div className="collectionSection">
        <SideBar showFirmHandler = {showFirmHandler} showProductHandler = {showProductHandler} />
        {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
        {showRegister && <Register showLoginHandler={showLoginHandler} />}
        {showFirm && <AddFirm />}
        {showProduct && <AddProduct />}
        {showWelcome && <Welcome />}
        </div>
        
        </>
      </section>
    </div>
  )
}

export default LandingPage
