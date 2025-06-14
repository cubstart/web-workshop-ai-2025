import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import HeartClicker from './Components/HeartClicker';

function App() {
  return (
    <div className="App">
      {/* ethan */}
      <Header /> 
      <div className='content'>
        {/* mei */}
        <HeartClicker />

        {/* ethan */}
        <About />

        {/* mei */}
        <ProjectList />

        {/* ethan */}
        <Contact />
      </div>

      {/* mei */}
      <Footer />
    </div>
  );
}

export default App;
