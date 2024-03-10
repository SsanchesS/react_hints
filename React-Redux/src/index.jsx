import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { Provider } from 'react-redux';
import {store} from "./store/store.ts"
                                          // 39:57 Делаем удобный хук (useActions) - https://www.youtube.com/watch?v=gPmYTqGPDWA
                                          // 48:00 Простой кастомный хук на получение - это кстати надо, потому что может изменится actions (название) и ты в 1 месте изменил и ниче не поломалось
                                          // useCallback - и useMemo 01:13:22 - RTK Query (api на получение рецептов) 
                                          // 1:53:40 - типизирование useSelector хука. невозможно запомнить, но впринцыпе это и не наждо?

                                          // extraReducers - позволяет обрабатывать экшены из других слайсов в пределах одного слайса. 
  const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Provider store={store}>                          {/* Provider ( из модуля react-redux ) - чтобы связать компоненты с redux */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Старый redux
// actions                ↓    записка(что хотим) добавить деньги, снять деньги
// dispatch               ↓    отдаем работнику записку
// reducer (выполняет)    ↓    работник Отдает записку компьютеру, а он уже выполняет
//          изменяет state (логика с данными)

// const displatch = useDisplatch() - Обращатся за изменениями данных
// displatch({type:"ADD_CASH",payload: cash})
// const state = useSelector(state=>state.cashReducer) - Получить state


// redux toolkit
// CashSlice - слайсы - это обертка над reducer-ами, которая добавляет доп. фун-ал и упрощает работу

// const CashSlice = createSlice({
//   name: - уникальное название
//   initialState: - дефолтное значение состояния
//   reducers: - каждый case как отдельный reducer
// })

// экшены он создает сам из reducers
// export const {plus,munis} = CashSlice.actions