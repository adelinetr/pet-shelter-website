import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home Page/Home';
import OurPets from './OurPets/OurPets';
import DogsPage from './OurPets/DogsPage/DogsPage';
import CatsPage from './OurPets/CatsPage/CatsPage';
import AdoptionApplication from './OurPets/AdoptionApplication/AdoptionApplication';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/*Homepage*/ }
        <Route path='/' element={<Home />} />
        {/*Our Pets*/ }
        <Route path='/our-pets' element={<OurPets />} />
        <Route path='/our-pets/cats' element={<CatsPage/>} />
        <Route path='/our-pets/dogs' element={<DogsPage />} />
        <Route path='/our-pets/adoption-application' element={<AdoptionApplication />} />
        {/*Services*/ }

      </Routes> 
    </BrowserRouter>
  );
} 

