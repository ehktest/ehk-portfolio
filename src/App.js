import "./App.scss";

// import { ThemeProvider } from "./theme/context";
import ThemeProvider from "./theme/context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppRouter />
          <ToastContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
