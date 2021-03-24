
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors())
app.use(bodyParser.json())

const users = ['Emon', 'Sumon', 'Sijan', 'Midul', 'Anwar', 'Maruf', 'Rafi', 'Siyam', 'Lazim'];

app.get('/', (req, res) => {
    const fruits = {
        banana: 15,
        apple: 20,
        mango: 25,
        orange: 30
    }
    res.send(fruits)
})
app.get('/friends', (req, res) => {
    const friends = [
        'Nur Alom',
        'Anwar Hossain',
        'Maruf Pagla',
        'Rafi Meye baj'
    ]
    res.send(friends)
})

app.get('/users/:id', (req, res)=> {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})


app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 15;
    res.send(user)
})

app.listen(3000, () => console.log('Listening to port 3000'))