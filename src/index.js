import "@fontsource/poppins";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {ShopListDataProvider} from "./components/Context.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopListDataProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ShopListDataProvider>
);