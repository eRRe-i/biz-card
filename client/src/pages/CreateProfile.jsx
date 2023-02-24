import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
import Form from "../components/Form"
import "./../css/style.css"


export default function CreateProfile() {
    return (
        <div className="create-profile">
            <Navbar />
            <main className="create-profile--main">
                <Profile />
                <Form />
            </main>
        </div>
    )
}