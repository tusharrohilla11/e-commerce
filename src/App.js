import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Header from './components/Header/Header';
import Clothing from './pages/Clothing/Clothing';
import Electronics from './pages/Electronics/Electronics';
import Sports from './pages/Sports/Sports';
import Books from "./pages/Books"
import Furniture from "./pages/Furniture"
import Groceries from "./pages/Groceries"
import GiftCard from "./pages/GiftCards"

function App() {
  return (
  

    <Router>
    <div className="App">
      <Header/>
      
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/sports" element={<Sports/>}></Route>
      <Route path="/electronics" element={<Electronics/>}></Route>
      <Route path="/clothing" element={<Clothing/>}></Route>
      <Route path="/Furniture" element={<Furniture/>}></Route>
      <Route path="/groceries" element={<Groceries/>}></Route>
      <Route path="/books" element={<Books/>}></Route>
      <Route path="/giftcard" element={<GiftCard/>}></Route>

      </Routes>
     </div>
    </Router>

  );
}

export default App;
