import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Userlogin from "./pages/userlogin";
import UserSignUp from "./pages/usersignup";
import CaptainLogin from "./pages/captainlogin";
import CaptainSignUp from "./pages/CaptainSignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-login" element={<Userlogin />} />
      <Route path="/user-signup" element={<UserSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
    </Routes>
  );
}

export default App;