import { scrollToSection } from "./Main";
import { useMenuContext } from "./Context";

function Header() {

  const { _, setMenuState } = useMenuContext()

  return <header className="container-fluid d-flex justify-content-around align-items-center">
    <div className="left">
      <a href="#main" onClick={() => {
        scrollToSection("main")
      }}><h5>Label GYM</h5></a>
    </div>
    <div className="right">
      <a href="#whatis" onClick={() => {
        scrollToSection("whatis")
      }}>Quienes somos</a>
      <a href="#contact" onClick={() => {
        scrollToSection("contact")
      }}>Contacto</a>
      <a href="#galery" onClick={() => {
        scrollToSection("galery")
      }}>Galeria</a>
      <a href="#ubication" onClick={() => {
        scrollToSection("ubication")
      }}>Ubicacion</a>
      <img onClick={() => {
        setMenuState(true)
      }} className="menu" src="./boton-de-menu-de-tres-lineas-horizontales.png" alt="Menu" />
    </div>
  </header>
}

export default Header