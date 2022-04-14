const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:4000',
    credentials: true,
    accessControlAllowOrigin: '*'
}));

app.get('/getCookie', (req, res) => {
    //set cookie
    res.cookie('token', 'true');
    res.json({token: 'true'});
});

server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

