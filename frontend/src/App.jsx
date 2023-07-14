import './app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import BookTable from "./components/bookTable/BookTable.jsx";
import Order from "./components/order/Order.jsx";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const baseUrl="https://resturant-app-tau.vercel.app/api/v1"

function App() {  

  return (
    <div id="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/book" element={<BookTable/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
        <ToastContainer/>
      </Router>
    </div>
  )
}

export default App
