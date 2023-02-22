import Info from "../components/Info"
import About from "../components/About"
import Interests from "../components/Interests"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./../css/style.css"


export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="app">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}