import About from './Home Page/About/About';
import CatData from './Home Page/CatData/CatData';
import Contacts from './Contact/Contacts';
import Donation from './Home Page/Donation/Donation';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Home Page/Hero/Hero';
import HowToHelp from './Home Page/HowToHelp/HowToHelp';
import Volunteer from './Home Page/Volunteer/Volunteer';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <HowToHelp />
        <CatData />
        <About />
        <Donation />
        <Volunteer />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
