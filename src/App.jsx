import Contact from './components/Contact';
import Footer from "./components/Footer.jsx";

function App() {

  return (

      <div className="lg:h-screen bg-black text-white flex flex-col">
          <div className="flex-grow overflow-auto">
              <Contact />
          </div>
          <Footer />
      </div>
  )
}

export default App
