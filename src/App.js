import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import Cartpages from './Pages/Cartpages.js';
import Notfoundpage from './Pages/Notfoundpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { getCartItem,itemCount,subTotal, } from './Helpers/database/database';
import { useEffect, useState } from 'react';
import Apparelpages from './Pages/Apparelpages';
import Productdetailpage from './Pages/Productdetailpage';
function App() {
const [itemCart, setItemCart] = useState([])
const [cartCount, setCartCount] = useState(0)
const [SubTotal, setSubTotal] = useState(0)
useEffect(() => {
    getCartItem().then(res => {
      setItemCart(res)
    })

  }, [setItemCart])
useEffect(() => {
  setCartCount (itemCount(itemCart))

}, [setCartCount])
useEffect(() => {
 setSubTotal (subTotal(itemCart))
}, [])
  return (
  <div className='w-screen h-screen flex flex-col'>
      <BrowserRouter>
      <Header itemcount={cartCount} itemCart={itemCart} subTotal={SubTotal}/>
      <Routes>
      <Route exact path='/' element={<Homepage />}/>
      <Route path='/Cart' element={<Cartpages/>}/>
      <Route path='/collections/all-apparel' element={<Apparelpages />}/>
      <Route path='/collections/all-apparel/products/:id' element={<Productdetailpage />}/>
      <Route path='*' element={<Notfoundpage/>}/>
      </Routes >
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
