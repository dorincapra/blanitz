import {BrowserRouter, Routes, Route} from "react-router-dom"
import Adoptii from "./pages/Adoptii.jsx";
import BlanitzS from "./pages/BlanitzS.jsx";
import Blog from "./pages/Blog.jsx";
import AddBlanitz from "./pages/AddBlanitz.jsx";
import BlogS from "./pages/BlogS.jsx";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adoptii/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blanitz/:id" element={<BlanitzS/>}/>
          <Route path="/addAdoptie" element={<AddBlanitz/>}/>
          <Route path="/blogS/:id" element={<BlogS/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
