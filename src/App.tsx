import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import AllBooks from './pages/AllBooks/AllBooks';
import store from './store/store';


function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
      <AllBooks></AllBooks>  
    </Provider>
    
    </>
  );
}

export default App;
