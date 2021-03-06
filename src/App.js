import Topbar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Home />}/>
        <Route path="/register" element={currentUser ? <Home /> : <Register />}/>
        <Route path="/login" element={currentUser ? <Home /> : <Login />}/>
        <Route path="/post/:id" element={<Single/>}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
