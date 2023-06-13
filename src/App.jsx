import { Route, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import Body from "./page/home/body/Body";
import Profile from "./page/user/Profile/Profile.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="" element={ <Body/> }/>
          <Route path="profile" element={ <Profile/> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
