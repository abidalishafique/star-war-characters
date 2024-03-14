import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarWarCharacterList from "../components/charactersList";
import Login from "../components/loginIn";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarWarCharacterList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;