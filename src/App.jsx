import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {Provider} from "react-redux";
import store from "./store/index";
import MainComponent from './component/mainComponent/MainComponents';

function App() {
  return (
    <>
    {/* we should wrap the whole app with the component it's call Provider from the reac-redux */}
    <Provider store={store}>

      <Header />
      <MainComponent/>
      <Footer />
    </Provider>
    </>
  );
}

export default App;
