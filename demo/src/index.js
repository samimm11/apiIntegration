import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '@supabase/supabase-js'
import {SessionContextProvider} from '@supabase/auth-helpers-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const projectURL="https://atqbxwyrqyelbjdmriow.supabase.co";
const apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0cWJ4d3lycXllbGJqZG1yaW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MDM3MzcsImV4cCI6MjAwNjM3OTczN30.RUxLlnu0QN7ct41JV4h2DAtb3ynll60qVYjg7xMklzc";

const supabase =createClient(projectURL,apiKey);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
