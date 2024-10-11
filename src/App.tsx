import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import AllBooks from './pages/AllBooks/AllBooks';
import store from './store/store';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage/SearchPage';
import CartPage from './pages/CartPage/CartPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path='/' element={<AllBooks/>}/>
          <Route path='/:isbn13' element={<SelectedPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/favorite' element={<FavoritePage/>}/>
        </Routes>
        <Footer/>
      </Provider>
    </BrowserRouter>    
    </>
  );
}

export default App;
