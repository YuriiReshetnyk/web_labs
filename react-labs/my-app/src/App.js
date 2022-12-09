import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

import './App.css';
import Header from './components/Header/header';
import Catalog from './components/Catalog/catalog';
import Cart from './components/Cart/cart';
import Home from './components/Home/home';
import Footer from "./components/Footer/footer";
import Item from "./components/Item/item";
import AcceptationForm from "./components/AcceptationForm/acceptation_form";
import Success from "./components/Success/success";
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";

function App() {
  const pages = [
      {path: "/success", element: <Success/>},
      {path: "/acceptation_form", element: <AcceptationForm/>},
      {path: "/item", element: <Item/>},
      {path: "/cart", element: <Cart/>},
      {path: "/catalog", element: <Catalog/>},
      {path: "/home", element: <Home/>}]
  let renderedPages = pages.map((item, key) =>
    <Route key={key} path={item.path} element={item.element}/>
  )
  const cart = useSelector(state => state.cart)
  return (
      <Router>
        {cart.loggedIn ? <Header/> : null}
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            {cart.loggedIn ? renderedPages : null}
          </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
