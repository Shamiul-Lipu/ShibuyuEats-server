const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recepies.json')
const reviews = require('./data/review.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('ShibuyuEats server is running')
});

app.get('/reviews', (req, res) => {
    res.send(reviews);
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selected = chefs.find(i => i.id == id);
    res.send(selected);
    // console.log(selected);
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selected = recipes.filter(i => i.id == id);
    res.send(selected);
    // console.log(selected);
})

app.listen(port, () => {
    console.log(`ShibuyuEats API is runing on port: ${port}`)
});