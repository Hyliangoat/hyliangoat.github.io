import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Capstone from './components/Capstone';

export default function App() {
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Projects />
        <Capstone />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}