import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemePage } from './Themes/Theme.style.jsx'
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './Themes/GlobalStylle.style.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemePage}>
      <App />
      <GlobalStyled/>
    </ThemeProvider>
  </React.StrictMode>,
)
