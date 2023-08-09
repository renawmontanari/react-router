
import './App.css';

// Configuração react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Pages 
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
      <BrowserRouter>
      {/*Links com react router*/}
      <Navbar />
        {/* Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* Nested Route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* Search */}
          <Route path='/search' element={<Search />} />
          {/* Redirect */}
          <Route path='/company' element={<Navigate to='/about' />} />
          {/* No match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
