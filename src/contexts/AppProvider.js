import React,{createContext} from 'react'
import user_icon from '../img/user.png';


const AppContext = createContext();
 function AppProvider({children}) {

    const values = {
  user_icon
    }
  return (
    <AppContext.Provider value={values}>
    {children}
    </AppContext.Provider>
  )
}

export {AppContext,AppProvider};