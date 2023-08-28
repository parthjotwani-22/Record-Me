import "./App.css";
import LoginScreen from "./Pages/LoginScreen/login";
import RecordScreen from "./Pages/Record screen/RecordScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/record" element={<RecordScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
