const express = require('express');
const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
    const query = request.query;
    console.log(query);

    const { title, owner } = request.query;
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',    
        'Projeto 2',    
    ])
});

app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json([
        'Projeto 1',    
        'Projeto 2',    
    ])
});

app.put('/projects/:id', (request, response) => {
   const params = request.params;
   console.log(params);
    return response.json([
        'Projeto 1',    
        'Projeto 2',    
    ])
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',    
        'Projeto 2',    
    ])
});

app.listen(3333, () => {
    console.log('🙌Back-end started!');
});