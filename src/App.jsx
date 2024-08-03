// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import CreateContact from './components/CreateContact';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact  element={<Contacts/>} />
          <Route path="/create"  element={<CreateContact/>} />
          <Route path="/contact/:id"  element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;