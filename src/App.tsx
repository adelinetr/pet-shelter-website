import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home Page/Home';
import OurPets from './OurPets/OurPets';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/*Homepage*/ }
        <Route path='/' element={<Home />} />
        {/*Our Pets*/ }
        <Route path='/our-pets' element={<OurPets />} />
        <Route path='/our-pets/cats' element={<OurPets />} />
        <Route path='/our-pets/dogs' element={<OurPets />} />
        <Route path='/our-pets/adoption-application' element={<OurPets />} />
        {/*Services*/ }

      </Routes> 
    </BrowserRouter>
  );
} 

