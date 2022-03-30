import { Route, Routes } from "react-router-dom";
import "./App.css";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Restaurant></Restaurant>} />
      </Routes>
    </div>
  );
}

export default App;
