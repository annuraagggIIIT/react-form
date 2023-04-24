import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Homepage from "./Components/Homepage";
import List from "./Components/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<List />} />
        <Route path="/form" element={<Form/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;




