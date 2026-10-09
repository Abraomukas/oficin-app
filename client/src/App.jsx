import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Landing onLogin={() => navigate("/loading")} />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}