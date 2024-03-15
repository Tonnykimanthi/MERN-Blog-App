import Header from "./layout/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
