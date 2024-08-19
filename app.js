var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const conexion = require('./conexion/conexion');



const advanceRoute = require('./routes/advanceRoute');
const attendenceRoute = require('./routes/attendenceRoute');
const authenticationRoute = require('./routes/authenticationRoute');
const campusRoute = require('./routes/campusRoute');
const career_campuRoute = require('./routes/career_campuRoute');
const career_userRoute = require('./routes/career_userRoute');
const careerRoute = require('./routes/careerRoute');
const categoryRoute = require('./routes/categoryRoute');
const club_activityRoute = require('./routes/club_activityRoute');
const clubRoute = require('./routes/clubRoute');
const eventRoute = require('./routes/eventRoute');
const inscriptionRoute = require('./routes/inscriptionRoute');
const policyRoute = require('./routes/policyRoute');
const resourceRoute = require('./routes/resourceRoute');
const rolRoute = require('./routes/rolRoute');
const usersRoute = require('./routes/usersRoute');
var app = express();

  


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', advanceRoute);
app.use('/apiUser', attendenceRoute);
app.use('/api', authenticationRoute);
app.use('/api', campusRoute);
app.use('/api', career_campuRoute);
app.use('/api', career_userRoute);
app.use('/api', careerRoute);
app.use('/api', categoryRoute);
app.use('/api', club_activityRoute);
app.use('/api', clubRoute);
app.use('/api', eventRoute);
app.use('/api', inscriptionRoute);
app.use('/api', policyRoute);
app.use('/api', resourceRoute);
app.use('/api', rolRoute);
app.use('/api', usersRoute);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
