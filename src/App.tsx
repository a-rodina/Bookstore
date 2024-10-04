import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import AllBooks from './pages/AllBooks/AllBooks';
import store from './store/store';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path='/' element={<AllBooks/>}/>
          <Route path='/:isbn13' element={<SelectedPage/>}/>
        </Routes>
        <Footer/>
      </Provider>
    </BrowserRouter>    
    </>
  );
}

export default App;
