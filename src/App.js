import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Cart from './components/Cart/Cart';
import MyAccount from './components/MyAccount/MyAccount';
import MyDetails from './components/MyAccount/MyDetails/MyDetails';
import UpdateName from './components/MyAccount/UpdateName/UpdateName';
import Address from './components/MyAccount/Address/Address';
import ChangePassword from './components/MyAccount/ChangePassword/ChangePassword';


function App() {
  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/products' element={<ProductsPage></ProductsPage>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/profile' element={<MyAccount></MyAccount>}>
          <Route path='' element={<MyDetails></MyDetails>}/>
          <Route path='update' element={<UpdateName></UpdateName>}/>
          <Route path='address' element={<Address></Address>}/>
          <Route path='password' element={<ChangePassword></ChangePassword>}/>
        </Route>
      </Routes>
      
    </div>
     <Footer></Footer>
    </>
  );
}

export default App;
