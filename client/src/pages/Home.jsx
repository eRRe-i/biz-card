import Profile from "../components/Profile"
import Navbar from "../components/Navbar"
import "./../css/style.css"


export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <Profile />
        </div>
    )
}