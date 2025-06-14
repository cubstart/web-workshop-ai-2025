import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
