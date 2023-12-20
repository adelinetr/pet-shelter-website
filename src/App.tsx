import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home Page/Home';
import OurPets from './OurPets/OurPets';
import DogsPage from './OurPets/DogsPage/DogsPage';
import CatsPage from './OurPets/CatsPage/CatsHero/CatsPage';
import AdoptionApplication from './AdoptionApplication/AdoptionApplication';
import AboutPage from './AboutUs/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/*Homepage*/ }
        <Route path='/' element={<Home />} />
        {/*About us*/ }
        <Route path='/about-us' element={<AboutPage />} />
        {/*Our Pets*/ }
        <Route path='/our-pets' element={<OurPets />} />
        <Route path='/our-pets/cats' element={<CatsPage/>} />
        <Route path='/our-pets/dogs' element={<DogsPage />} />
        <Route path='/services/adoption' element={<AdoptionApplication />} />
        {/*Services*/ }

      </Routes> 
    </BrowserRouter>
  );
} 

