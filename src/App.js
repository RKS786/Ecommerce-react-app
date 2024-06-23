import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AddProduct from "./pages/AddProduct/AddProduct";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
