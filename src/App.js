import './App.css';
import Nav from './components/navbar/Nav.jsx'
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Portfolio from './components/porfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills/>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
