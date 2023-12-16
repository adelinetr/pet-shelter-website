import About from './About/About';
import CatData from './CatData/CatData';
import Donation from './Donation/Donation';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import HowToHelp from './HowToHelp/HowToHelp';
import Volunteer from './Volunteer/Volunteer';

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
        <Footer />
    </div>
  );
}

export default App;
