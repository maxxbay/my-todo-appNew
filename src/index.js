import App from "./App";
import React from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const store = configureStore();
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading ...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
