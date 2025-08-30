const express = require('express');
const path = require('path');
// const attendanceRoutes = require('./routes/attendance');

const app = express();
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use('/', attendanceRoutes);
app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/register",(req,res)=>{
    res.send("register")
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
