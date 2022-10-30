import { Route, Routes } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage";


function RotaMain() {
  return (
    <Routes>
      <Route path="/" element={<CadastroPage />} />
    </Routes>
  );
}

export default RotaMain;
