import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;