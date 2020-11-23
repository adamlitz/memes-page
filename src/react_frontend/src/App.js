import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

import Navbar from './components/navbar/Navbar';
import Body from './components/body_container/Body';

function AppRoot() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? green[700] : green[400];
  const mainSecondaryColor = darkState ? '#FFFFFF' : '#202020';
  const backgroundColor = darkState ? '#303030' : 'F3F3F3';

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
      background: {
        main: backgroundColor,
      },
    },
    typography: {
      root: {
        fontFamily: 'Roboto',
      }
    },
  });

  const handleBackgroundColorSwitch = () => {
    setDarkState(!darkState);
  }

  return (
      <>
        <ThemeProvider theme={theme}>
          <Navbar handleBackgroundColorSwitch={handleBackgroundColorSwitch}/>
            <Body></Body>
        </ThemeProvider>
      </>
  );
}

export default AppRoot;