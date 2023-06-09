import { Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import Home from "./page/home/Home";
import Register from "./page/user/Register";
import Body from "./page/home/Body";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="" element={<Home />}>
            <Route path="" element={<Body />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
