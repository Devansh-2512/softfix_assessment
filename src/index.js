import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
  theme={{
    components: {
      Menu: {
        iconSize:18,
        itemSelectedColor:"white",
        itemHoverBg:"#5cdbd3",
        itemSelectedBg:"#08979c",
        itemHoverColor:"white"
        /* here is your component tokens */
      },
    },
  }}
>
<App />
</ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
