// React-Redux library used to keep track of a variable used on multiple components.

import {useSelector} from 'react-redux'
import { useEffect } from 'react';


const ThemeProvider = ({children}) => {
  const theme = useSelector((state) => state.theme.mode);


  //To get the background toggle background color (as it is not a child element) the useEffect Hook is used. This effect is run whenever the theme changes
  useEffect(() => {
    
    if (theme === 'light') {
      document.body.style.backgroundColor = '#fff';
    } else if (theme === 'dark') {
      document.body.style.backgroundColor = '#000000';
    }
  }, [theme]); 


  return (
  <div className = {`theme-${theme}`}>{children}</div>
  )
}



export default ThemeProvider