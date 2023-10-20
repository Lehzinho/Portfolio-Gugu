import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/projects" element={<Home />} />
    </Routes>
  );
}
