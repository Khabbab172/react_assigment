import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import { createCustomTheme } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import useSettings from './hooks/useSettings';

function App() {
  const {
    settings
  } = useSettings();

  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes
  });
  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
