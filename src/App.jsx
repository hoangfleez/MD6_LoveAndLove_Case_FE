import { Route, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import Body from "./page/home/body/Body";
import Profile from "./page/user/Profile/Profile.jsx";
import EditProfile from "./page/user/Profile/EditProfile.jsx";
import AddProvider from "./page/user/Provider/AddProvider.jsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<Home/>}>
                    <Route path="" element={<Body/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="edit-profile" element={<EditProfile/>}/>
                    <Route path="add-provider" element={<AddProvider/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
