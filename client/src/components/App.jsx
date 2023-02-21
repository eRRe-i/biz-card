import About from "./About"
import Footer from "./Footer"
import Info from "./Info"
import Interests from "./Interests"
import { useEffect, useState } from "react"
import "./../css/style.css"

function App(){

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api")
    .then( response => response.json())
    .then(data => {setBackendData(data)}) 
  }, [])

  // try {
  //   console.log(backendData.users)
  // } catch(e) {
  //   console.log("oops")
  // }
  
  return (
      <div className="app">
          <Info />
          <About />
          <Interests />
          <Footer />
          {(typeof backendData.users === 'undefined') ? (
            <h1 style={{color:"white"}}>Oops</h1>
          ) : (
            <h1 style={{color:"white"}}>{backendData.users}</h1>
          ) }
      </div>
  )
}

export default App;
