// importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const templateRouter = require('./routers/templateRouter');
const reviewRouter = require('./routers/reviewRouter');
const orderRoutes = require('./routers/manageOrder');
const orderRoutes = require('./routers/orderRouter');
const cors = require('cors');

// initializing express
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
})

);
app.use(express.json());
app.use('/user', UserRouter);
app.use('/template', templateRouter);
app.use('/review', reviewRouter);
app.use('/order', orderRoutes);


// route or endpoint
app.get('/', (req, res) => {
    res.send('Response from express')
})

app.get('/add', (req, res) => {
    res.send('Response from add');
})

// getall
app.get('/getall', (req, res) => {
    res.send('Response from getall');
})

//update
app.get('/getall', (req, res) => {
    res.send('Response from update');
})

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use order routes
app.use('/orders', orderRoutes);


app.listen(port, () => { console.log('server started') });







