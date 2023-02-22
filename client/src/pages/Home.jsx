import Info from "../components/Info"
import About from "../components/About"
import Interests from "../components/Interests"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="app">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}