import React from 'react';
import ReactDOM from 'react-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './components';
import { StoreProvider, Store } from './store';
import reportWebVitals from './reportWebVitals';

import './mapbox.css';

function Entry() {
  const { state } = React.useContext(Store);

  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: !state.lightTheme ? 'dark' : 'light'
      }
    }),
    [ state.lightTheme ]
  );

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <StoreProvider>
    <Entry />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
