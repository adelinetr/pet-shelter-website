import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home Page/Home";
import DogsPage from "./OurPets/DogsPage/DogsPage";
import CatsPage from "./OurPets/CatsPage/CatsPage";
import AdoptionApplication from "./AdoptionApplication/AdoptionApplication";
import AboutPage from "./AboutUs/AboutPage";
import Volunteer from "./Volunteer/Volunteer";
import Donation from "./Donation/Donation";
import Contacts from "./ContactsPage/Contacts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Homepage*/}
        <Route path="/" element={<Home />} />
        {/*About us*/}
        <Route path="/about-us" element={<AboutPage />} />
        {/*Our Pets*/}
        <Route path="/our-pets/cats" element={<CatsPage />} />
        <Route path="/our-pets/dogs" element={<DogsPage />} />
        {/*Services*/}
        <Route path="/services/adoption" element={<AdoptionApplication />} />
        <Route path="/services/volunteer" element={<Volunteer />} />
        <Route path="/services/donation" element={<Donation />} />
        {/*Contacts*/}
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
