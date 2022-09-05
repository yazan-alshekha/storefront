import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Categories from './component/mainComponent/Categories';
import {Provider} from "react-redux";
import store from "./store/index";
import CurrentCategory from './component/mainComponent/CurrentCategory';
import Products from './component/mainComponent/Products';

function App() {
  return (
    <>
    {/* we should wrap the whole app with the component it's call Provider from the reac-redux */}
    <Provider store={store}>

      <Header />
      <main>
      <Categories/>
      <CurrentCategory/>
      <Products/>
      </main>
      <Footer />
    </Provider>
    </>
  );
}

export default App;
