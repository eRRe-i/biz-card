import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function Profile() {
    return (
        <div className="profile">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}