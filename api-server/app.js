var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var countryRouter = require('./routes/country')
var usersRouter = require('./routes/user');
var chatsRouter = require('./routes/chat');
const bodyParser = require('body-parser')
var cors = require('cors');

var app = express();
app.use(cors({ origin: true, credentials: true }));

// view engine setup
//app.set('trust proxy', 1);
app.use(cookieParser());
var sessionParser = session({
  secret: 'secret',
  key: 'express.sessionId',
  resave: false,
  saveUninitialized: true,
  expires: false,
  maxAge: Date.now() + (30 * 86400 * 1000),
  cookie: { secure: false, httpOnly: false }
});
app.use(sessionParser);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(__dirname + '/public'));

app.use('/countries', countryRouter);
app.use('/users', usersRouter);
app.use('/chats', chatsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
  Chats update with websocket
*/
var models = require('./db/models');
var db = require('./db/models/index');
const Op = db.Sequelize.Op;
var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 40510 });

wss.on('connection', function (ws, req) {
  setInterval(() => {
    sessionParser(req, {}, function () {
      models.User.findOne({
        where: {
          id: req.session.userId
        }
      }).then(user => {
        models.Chat.findAll({
          where: {
            [Op.or]: [{ user1Id: user.id }, { user2Id: user.id }]
          },
          raw: true
        }).then(async chats => {
          var response = await Promise.all(chats.map(async chat => {
            chat.friend = await models.UserData.findOne({
              where: {
                id: user.id === chat.user1Id ? chat.user2Id : chat.user1Id
              },
              raw: true
            });
            chat.friend.country = await models.Country.findOne({
              where: {
                id: chat.friend.countryId
              },
              raw: true
            });
            chat.messages = await models.Message.findAll({
              where: {
                chatId: chat.id
              },
              raw: true
            });
            chat.messages.map(message => {
              message.isMine = message.recipentId !== user.id;
            });
            chat.friend.avatar = 'http://localhost:3000' + chat.friend.avatar;
            return chat;
          }));
          response = response.sort(chat => chat.messages[chat.messages.length - 1].id);
          ws.send(JSON.stringify(response));
        });
      });
    });
  }, 500);

});

module.exports = app;
