import { useMenuContext } from "./Context";

export default function MenuAlter() {
  const { menuState, setMenuState } = useMenuContext()

  console.log(menuState)

  return <div className={`menu-top text-center container-fluid d-flex align-items-center flex-column ${menuState ? "--active" : ""}`}>
    <div className="line-menu">
      <a href="#whatis" onClick={() => setMenuState(false)}>
        Quienes somos
      </a>
    </div>
    <div className=" line-menu">
      <a href="#contact" onClick={() => setMenuState(false)}>
        Contacto
      </a>
    </div>
    <div className=" line-menu">
      <a href="#galery" onClick={() => setMenuState(false)}>
        Galeria
      </a>
    </div>
    <div className=" line-menu">
      <a href="#ubication" onClick={() => setMenuState(false)}>
        Ubicacion
      </a>
    </div>
    <div className="close">
      <h2 onClick={() => setMenuState(false)}>
        ❌
      </h2>
    </div>
  </div>
}