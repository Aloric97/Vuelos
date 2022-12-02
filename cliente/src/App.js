import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra_navegador from './components/navBar';
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import Peliculas from './components/peliculas'
import NotFound from './components/NotFound';
import Footer from './components/footer'


function App() {
  return (
    <>
      <Router>
        <Barra_navegador/>
        <Footer/>
        <Routes>
          <Route path="/peliculas" element={<Peliculas/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
