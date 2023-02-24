import "./css/style.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import CreateProfile from "./pages/CreateProfile"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;




// const [backendData, setBackendData] = useState([{}])

// useEffect(() => {
//   fetch("/api")
//     .then(response => response.json())
//     .then(data => { setBackendData(data) })
// }, [])

// // try {
// //   console.log(backendData.users)
// // } catch(e) {
// //   console.log("oops")
// // }
