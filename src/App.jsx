// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// }

// export default App;


// import Navbar from "./components/Navbar";

// function App() {

//   return (

//     <>

//       <Navbar />

//     </>

//   );

// }

// export default App;

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
