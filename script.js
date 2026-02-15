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

// Массив всех заказов
const allOrders = [
    { title: 'Разработка лендинга', customer: 'ООО «Ромашка»', budget: 30000, status: 'В работе' },
    { title: 'Настройка CRM', customer: 'ИП Иванов', budget: 15000, status: 'Ожидает старта' },
    { title: 'Аудит безопасности', customer: 'ООО «ТехноСервис»', budget: 25000, status: 'Завершён' },
    { title: 'Интеграция API', customer: 'Стартап “Фудтех”', budget: 40000, status: 'В работе' },
    { title: 'Разработка мобильного приложения', customer: 'ООО «БизнесСофт»', budget: 120000, status: 'В работе' },
    { title: 'Поддержка сервера', customer: 'ИП Смирнов', budget: 8000, status: 'Ожидает старта' }
];

// Функция отображения заказов с фильтрацией
function renderOrders(filterText = '') {
    const ordersList = document.querySelector('#orders .orders-list');
    if (!ordersList) return;
    ordersList.innerHTML = '';
    const filtered = allOrders.filter(order => 
        order.title.toLowerCase().includes(filterText.toLowerCase()) ||
        order.customer.toLowerCase().includes(filterText.toLowerCase())
    );
    filtered.forEach(order => {
        const card = document.createElement('div');
        card.className = 'order-card';
        let statusClass = '';
        if (order.status === 'В работе') statusClass = 'status-active';
        else if (order.status === 'Ожидает старта') statusClass = 'status-pending';
        else if (order.status === 'Завершён') statusClass = 'status-completed';
        card.innerHTML = `
            <div class="order-header">
                <span class="order-title">${order.title}</span>
                <span class="order-status ${statusClass}">${order.status}</span>
            </div>
            <div class="order-meta">Заказчик: ${order.customer} · Бюджет: ${order.budget} ₽</div>
        `;
        ordersList.appendChild(card);
    });
}

// Обработчик поиска
const searchInput = document.getElementById('searchOrdersInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => renderOrders(e.target.value));
}
// Первоначальный рендер
renderOrders();
