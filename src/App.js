import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProduct from './components/AddProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add_product' element={<AddProduct />} />
            <Route path='/update_product/:id' element={<UpdateProduct />} />
            <Route path='/categories' element={<h1>This categories page</h1>} />
            <Route path='/profile' element={<h1>This is profile page</h1>} />
            <Route path='/logout' element={<h1>This is logout page</h1>} />
          </Route>

          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
