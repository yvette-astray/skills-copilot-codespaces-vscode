// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
let comments = [
    {
        id: 1,
        username: "Alice",
        comment: "This is a comment."
    },
    {
        id: 2,
        username: "Bob",
        comment: "This is another comment."
    }
];

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find((comment) => comment.id === id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).send('Comment not found.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});