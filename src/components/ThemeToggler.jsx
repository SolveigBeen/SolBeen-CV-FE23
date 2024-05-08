//Component to change color theme with a button in the Header/nav.

import {useDispatch} from 'react-redux'
import { toggleTheme } from '../store';
import ButtonGeneral from './ButtonGeneral/ButtonGeneral';


const ThemeToggler = () => {

  const dispatch = useDispatch();
  return (
    <>
    <div>
      <ButtonGeneral  className='buttonGen'
      onClick={() => dispatch(toggleTheme())}
      title='Change theme'></ButtonGeneral>
      
    </div>
  
    </>
  );
}

export default ThemeToggler