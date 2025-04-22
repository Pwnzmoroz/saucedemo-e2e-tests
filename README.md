Автоматизированные тесты для [Saucedemo.com](https://www.saucedemo.com) с использованием Playwright и Page Object Pattern.
## Установка
1. Клонировать репозиторий:
git clone https://github.com/ваш-логин/saucedemo-e2e-tests.git
cd saucedemo-e2e-tests
Установить зависимости:
bash
npm install
Установить браузеры для Playwright:
bash
npx playwright install
Запуск тестов
Все тесты:
bash
npm test
Конкретный тест:
bash
npx playwright test tests/auth.spec.js
С видимым браузером:
bash
npm run test:headed
Генерация отчета
bash
npm run report
