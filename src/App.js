import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from './pages/Menu';
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>    <Navbar />
     <BrowserRouter>

    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>

     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
