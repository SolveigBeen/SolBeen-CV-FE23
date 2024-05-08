//Component to change color theme with a button in the Header/nav.

import {useDispatch} from 'react-redux'
import { toggleTheme } from '../store';

const ThemeToggler = () => {

  const dispatch = useDispatch();
  return (
    <div>
      <button className='unselected-button'onClick={() => dispatch(toggleTheme())}>Byt tema</button>
    </div>
  );
}

export default ThemeToggler