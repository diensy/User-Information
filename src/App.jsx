import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Todos from "./pages/Todos";
import Photos from "./pages/Photos";
import Album from "./pages/Album";
import Home from "./pages/Home";
import Albumvies from "./pages/Albumvies";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/album" element={<Album />} />
          <Route path="/" element={<Login />} />
          <Route path="/album/:albumId" element={<Albumvies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
