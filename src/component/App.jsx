
import React from "react"
import Header from "./header/Header"
import '../css/mystyle.css'
import Footer from '../component/footer/Footer'
import Content from '../component/content/Content'
// import Burger from "./burgerMenu/Burger"


function App() {
  return (
    <>
      <Header />
      <Content />
      <sidebarLeft />
      <Footer />
    </>

  )
}


export default App
