import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <Hero />
      <Project />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
