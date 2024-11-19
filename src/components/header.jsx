
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <img src="./scr/img/Logo.svg" alt="Логотип" />
            <p>Название сайта</p>
            <ul className="nav">
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
            <div className="search">
                <input type="text" placeholder="Поиск..." />
                <button>Найти</button>
            </div>
        </div>
    );
};

export default Header; 
