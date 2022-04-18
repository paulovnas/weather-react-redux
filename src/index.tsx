import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const config = {
  initialColorMode: localStorage.getItem('chakra-ui-color-mode') ||'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
<StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);

reportWebVitals();