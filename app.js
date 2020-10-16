const cors = require('cors');
// const pageRouter = require('./routes/pages');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.set('view engine','ejs');

// app.use('/',pageRouter);
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const port = process.env.PORT || 5050;

app.get('/', (req,res) => {
  res.render('home',{title:"Home"});
})

app.get('/contact', (req,res) => {
  res.render('contact',{title:"Contact"});
})

app.get('/schedule', (req,res) => {
  res.render('schedule',{title:"Schedule"});
})

app.get('/teams', (req,res) => {
  res.render('teams',{title:"Teams"});
})

app.get('/about', (req,res) => {
  res.render('about',{title:"About Us"});
})

app.listen(port,(err,res) => {
  if (err) throw err;
  console.log(`listening on port ${port}`)
})