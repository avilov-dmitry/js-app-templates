Инициализация проекта:
npm init

Установка DEV зависимостей:
npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react style-loader css-loader html-webpack-plugin prettier lint-staged husky eslint

Установка общих зависимостей:
npm i react react-dom

Добавить .babelrc - в нем указываем какие preset'ы использовать

Добавляем .gitignore

Добавляем скрипты для develop и production мода в package.json

Добавляем webpack.config.js

Добавляем папку src и в нее:
index.js
index.html
App.js
App.css

Использовалась статья: https://nuancesprog.ru/p/2222/