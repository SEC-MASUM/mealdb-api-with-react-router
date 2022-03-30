import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Restaurant></Restaurant>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
