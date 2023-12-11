import About from './About/About';
import Donation from './Donation/Donation';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import HowToHelp from './HowToHelp/HowToHelp';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <HowToHelp />
        <About />
        <Donation />
    </div>
  );
}

export default App;
