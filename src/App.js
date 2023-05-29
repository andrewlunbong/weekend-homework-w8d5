import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import ErrorPage from "./components/ErrorPage";
import Basket from "./components/Basket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'; 


function App() {

  let initialProduct = [
    { name: "Nike Shoes", cost: 60 },
    { name: "Adidas Shoes", cost: 70 },
    { name: "Yeezy", cost: 200 },
    { name: "Timberland Shoes", cost: 150 },
    { name: "Jordan Shoes", cost: 500 },
    { name: "Gucci", cost: 450 }
    ];
    
    
    const [product, setProduct] = useState(initialProduct);
    const [basket, setBasket] = useState([])



  
    return(
      <div className='App'>
      <Router>
          <NavBar />
          <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/product" element={<Product product={product} basket={basket} setBasket={setBasket} />} />

          <Route path="/basket" element={<Basket basket={basket} setBasket={setBasket} />} />

          <Route path="*" element={< ErrorPage />}/>
        </Routes>
      </Router>
      </div>
    );
  }




export default App;


