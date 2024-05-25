// 1. импортирование модулей
const express = require('express');
const solver = require('./src/solver.js');

// 2. создание, конфигурирование и запуск приложения express
const app = express();

// 2.1. добавление обработчиков
app.get('/ping', function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        message: "pong", 
        time: new Date()
    }));
});


app.get('/solve', function(request, response) {
    let a = parseFloat(request.query.a);
    let b = parseFloat(request.query.b);
    let c = parseFloat(request.query.c);
  
  
    let result = solver.solve(a, b, c);
  
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(result));
  });
  


// 2.2. запуск приложения
console.log('starting server on port 8080 ...');
app.listen(8080);
console.log('started');
