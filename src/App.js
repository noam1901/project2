import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
      </Routes>
      <div className='products-page'>
        <div className='sortbar'>
          <div className='sortbar-content'>
            <div className='categories'>
              <h1>Categories:</h1>
              <div className='categories-container'>
                <div><input type='checkbox'></input>Category1</div>
                <div><input type='checkbox'></input>Category1</div>
                <div><input type='checkbox'></input>Category1</div>
                <div><input type='checkbox'></input>Category1</div>
              </div>
            </div>
            <div className='prices'>
                <h1>Prices:</h1>
                <div className='prices-container'>
                    <div>Min price:<input type='number' defaultValue='0'></input></div>
                    <div>Max price:<input type='number' defaultValue='9999'></input></div>
                </div>
            </div> 
            <div className='sort-button'>
              <h1>Sort now</h1>
            </div>
            
          </div>
        </div>
        <div className='cards'>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
