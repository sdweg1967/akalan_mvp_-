// script.js — минимальная интерактивность (заглушки для кнопок)

document.addEventListener('DOMContentLoaded', function() {
    // Кнопка поиска
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Поиск исполнителей (демо-режим). В реальной версии здесь будет переход к результатам.');
        });
    }

    // Кнопки Вход / Регистрация
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Открыть форму входа (демо)');
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Открыть форму регистрации (демо)');
        });
    }

    // Закрытие мобильного меню после клика на ссылку (для удобства)
    const navLinks = document.querySelectorAll('.header__nav a');
    const burgerToggle = document.getElementById('burger-toggle');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (burgerToggle && burgerToggle.checked) {
                burgerToggle.checked = false;
            }
        });
    });
});
// script.js — минимальная интерактивность (только поиск)
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Поиск исполнителей (демо-режим). В реальной версии здесь будет переход к результатам.');
        });
    }

    // Закрытие мобильного меню после клика на ссылку
    const navLinks = document.querySelectorAll('.header__nav a');
    const burgerToggle = document.getElementById('burger-toggle');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (burgerToggle && burgerToggle.checked) {
                burgerToggle.checked = false;
            }
        });
    });
});
// Подтверждение выхода
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('Вы действительно хотите выйти?')) {
        window.location.href = 'auth.html';
    }
});
