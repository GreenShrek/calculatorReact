import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import Max from '../pages/max';
import Alex from '../pages/alex';
import Makar from '../pages/makar';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/max" element={<Max />} />
      <Route path="/alex" element={<Alex />} />
      <Route path="/makar" element={<Makar/>}/>
    </Routes>
  </BrowserRouter>
);

export default Router;
