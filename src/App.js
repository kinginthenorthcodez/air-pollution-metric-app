import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home';
import Details from './components/details/Details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idCountry/:lat/:lng" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
