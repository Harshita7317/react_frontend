import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />

          <Route path="/profile" Component={Profile} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
