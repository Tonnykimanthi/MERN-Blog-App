import Header from "./layout/Header";
import Home from "./layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/blogs" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
