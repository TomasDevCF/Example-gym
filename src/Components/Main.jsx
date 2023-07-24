import '../App.css';
import Enter from "./mainComponents/Enter";
import WhatIs from "./mainComponents/WathIs";
import Contact from "./mainComponents/Contact"
import Galery from "./mainComponents/Galery";
import Ubication from "./mainComponents/Ubication";
import Header from "./Header";
import Footer from "./Footer";
import MenuAlter from "./MenuAlter";

import { MenuProvider } from "./Context";

export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <MenuAlter/> 
        <Header />
        <Enter />
        <WhatIs />
        <Contact />
        <Galery />
        <Ubication />
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default App;
