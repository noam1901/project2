import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage/ProductsPage';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/products' element={<ProductsPage></ProductsPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
