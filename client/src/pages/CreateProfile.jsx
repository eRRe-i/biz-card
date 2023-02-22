import Navbar from "../components/Navbar"
import Profile from "../components/Profile"


export default function CreateProfile() {

    return (
        <div className="create">
            <Navbar />
            <div className="create-mail">
                <Profile />
                {/* <Form /> */}
            </div>
        </div>
    )
}