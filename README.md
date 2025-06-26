# praktika

1. Клонируйте репозиторий: git clone https://github.com/bunchh/praktika.git
2. Установите зависимости: npm install
3. Установить библиотеку: npm install react-router-dom
4. Запустите локальный сервер для разработки: npm start

Развертывание проекта на GitHub Pages
1. Установка gh-pages: npm install gh-pages --save-dev
2. Изменения в package.json
   Добавьте в начало файла: "homepage": "https://bunchh.github.io/praktika",
3. Обновите раздел scripts:
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
4. Для публикации проекта выполните команду: npm run deploy

После этого сайт будет доступен по адресу:
https://bunchh.github.io/praktika/
