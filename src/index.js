import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from "react-redux";
import store from "./redux/store";
  const queryClient = new QueryClient();
 
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  <React.StrictMode>
    <Provider store={store}>

    <QueryClientProvider  client={queryClient}>
      <ToastContainer />
      <App />
  
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>


);
