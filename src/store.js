import {configureStore, createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice ({
  name: 'theme',
  initialState: {
    mode:'light', //starta med light mode som standard
  }, 
  reducers: {
    toggleTheme(state){
      state.mode = state.mode === 'light' ? 'dark': 'light';
//state.mode:aktuella värdet av mode egenskapen. 
/// Villkor som kontrollerar om det aktuella temat är ljust eller inte.
// om villkoret state.mode === 'light' (sant) tilldelas värdet 'dark' till state
    },
  },
});

export const store= configureStore({
  reducer: {
theme: themeSlice.reducer
  },
});

export const {toggleTheme} = themeSlice.actions