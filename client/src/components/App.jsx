import "./../css/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import CreateProfile from "../pages/CreateProfile"
import ProfileId from "../pages/ProfileId"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/create" element={<CreateProfile />} />
          <Route identifier element={<ProfileId />} />
        </Route>
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
