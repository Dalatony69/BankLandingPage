import './App.css';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';

function App() {
  return (
    <div className="App">

      <div className='header-holder'>
        <Header/>
      </div>

      <main className='section-holder'>
        <Section1/>
        <Section2/>
      </main>

      <div className='footer-holder'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
