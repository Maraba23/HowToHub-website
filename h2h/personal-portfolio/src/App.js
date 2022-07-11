import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Home/NavBar";
import { Banner } from "./components/Home/Banner";
import { Skills } from "./components/Home/Skills";
import { Projects } from "./components/Home/Projects";
import { Contact } from "./components/Home/Contact";
import { Footer } from "./components/Home/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
