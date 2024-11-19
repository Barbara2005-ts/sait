import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/header'; // Убедитесь, что этот компонент правильно экспортируется

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Удалите это объявление, если вы уже импортируете Header из другого файла
// function Header() {
//   return (
//     <div className="header">
//       <img src="./scr/img/Logo.svg" alt="Логотип" />
//       <p>Название сайта</p>
//       <ul className="nav">
//         <li><a href="/">Главная</a></li>
//         <li><a href="/about">О нас</a></li>
//         <li><a href="/contact">Контакты</a></li>
//       </ul>
//       <div className="search">
//         <input type="text" placeholder="Поиск..." />
//         <button>Найти</button>
//       </div>
//     </div>
//   );
// }

// function App() {
//     return (
//         <>
//           <div className="container">
//             <Header /> {/* Используем импортированный Header */}
//           </div>
//         </>
//     );
// }

// export default App;
