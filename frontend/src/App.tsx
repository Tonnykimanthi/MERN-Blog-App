import AddBlogForm from "./components/AddBlogForm";
import EditBlogForm from "./components/EditBlogForm";
import Header from "./layout/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AddBlogForm />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blogs/:id" Component={Blog} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
