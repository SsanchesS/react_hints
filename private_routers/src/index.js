import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // https://jsonplaceholder.typicode.com/posts
root.render(
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);


// Здание:
// ✓ контекст провайдер (значения: user,login,log out)
// ✓ обертка, чтобы знать откуда мы пришли (обернуть в приватный роутер)  
// ✓ на странице Login получить откуда пришли, переправить обратно без истории + использовать form
// ✓ обернуть hoc компонентом который будет проверять атворизован ли юзер для приватных роутов иначе переадресация + откуда пришли
// 5 кастомный хук чтобы вытащить данные из контекста