const expreess = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const app = expreess();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

var employeeController = require('./controllers/employeeController');

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

app.use('/employees', employeeController);