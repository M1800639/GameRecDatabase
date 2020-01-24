const express = require('express');
const app = express();

app.use(express.json());

const users = [
    { id: 1, name: 'user1', comments: []},
    { id: 2, name: 'user2', comments: []},
    { id: 3, name: 'user3', comments: []},
];

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.put('/api/user/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send('This user id was not found.');
    res.send(user);
});

app.post('/api/users', (req, res) => {
    const user = {
        name: users.add (""),
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
});

// app.get('/api/users/:userId', (req, res) => {
//     console.log(req.params.userId);
//     res.status(200).json({
//         userId: req.params.userId
//     })
// });

app.post('/api/users/:id/comments', (req, res) => { 
    // const comments = {
    //     comments: users.add (""),
    //     comments: req.body.comments
    // };


const idThatWeWant = Number.parseInt(req.params.id,10);

    const found = users.find(user => user.id === idThatWeWant);
    found.comments.push('hello')

    // id.push(comments);
    res.send(found);
});

app.get('/api/users/:id', (req, res) => {
    const userId = Number.parseInt(req.params.id,10);

    const found = users.find(user => user.id === userId);

    // id.push(comments);
    res.send(found);
});

app.post('/api/users/:id/name', (req, res) => {
    const userId = Number.parseInt(req.params.id,10);

    const userNameChange = users.find(user => user.id === userId);
    userNameChange.name = req.query.name;

    res.send(userNameChange);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));