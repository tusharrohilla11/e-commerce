import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
<<<<<<< HEAD
import { ClerkProvider } from '@clerk/clerk-react';
=======
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
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

<<<<<<< HEAD
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
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
    </ClerkProvider>
=======
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

>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
  );
}

export default App;
