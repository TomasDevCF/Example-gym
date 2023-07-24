import React, { createContext, useMemo, useState } from "react";

const menuContext = createContext()


export function MenuProvider(props) {

  const [menuState, setMenuState] = useState(false)

  const values = useMemo(() => {
    return ({
      menuState,
      setMenuState
    })
  }, [menuState])

  return <menuContext.Provider value={values} {...props}/>
}

export function useMenuContext() {
  const context = React.useContext(menuContext)

  if (!context) {
    console.error("ha ocurrido un error.");
  }
  return context
}