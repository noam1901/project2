import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/navbar/Navbar';
import { Route, Routes} from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Cart from './components/Cart/Cart';
import MyAccount from './components/MyAccount/MyAccount';
import MyDetails from './components/MyAccount/MyDetails/MyDetails';
import UpdateName from './components/MyAccount/UpdateName/UpdateName';
import Address from './components/MyAccount/Address/Address';
import ChangePassword from './components/MyAccount/ChangePassword/ChangePassword';
import MyOrders from './components/MyAccount/MyOrders/MyOrders';
import Wishlist from './components/MyAccount/Wishlist/Wishlist';
import Login  from './components/Login/Login';
import Register from './components/Register/Register';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { useEffect, useState } from 'react';

function App() {
  const [logged, setLogged] = useState(false)
  useEffect(
    ()=>{
      const cookie = document.cookie.split('=')
      if (cookie[1]){
        setLogged(true)
      }
    },[])
  return (
    <>
    <div className="App">
      <Navbar loggedin={logged}></Navbar>
      <Routes>
        <Route path='product/:id' element={<SingleProduct></SingleProduct>}/>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/products' element={<ProductsPage></ProductsPage>}/>
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/profile' element={<MyAccount></MyAccount>}>
          <Route path='' element={<MyDetails></MyDetails>}/>
          <Route path='update' element={<UpdateName></UpdateName>}/>
          <Route path='address' element={<Address></Address>}/>
          <Route path='password' element={<ChangePassword></ChangePassword>}/>
          <Route path='orders' element={<MyOrders></MyOrders>}/>
          <Route path='wishlist' element={<Wishlist></Wishlist>}/> 
        </Route>
        <Route path='Login' element={<Login></Login>}/>
        <Route path='register' element={<Register></Register>}/>
      </Routes>
      
    </div>
     <Footer></Footer>
    </>
  );
}

export default App;
