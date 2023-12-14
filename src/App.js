import './App.css';
import './styles/tailwind.css'; // Import your CSS file
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>This product list page</h1>} />
          <Route path='/add_product' element={<h1>This is add product page</h1>} />
          <Route path='/categories' element={<h1>This categories page</h1>} />
          <Route path='/profile' element={<h1>This is profile page</h1>} />
          <Route path='/logout' element={<h1>This is logout page</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
