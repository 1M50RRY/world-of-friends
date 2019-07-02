var models = require('../db/models');
var db = require('../db/models/index');

const Op = db.Sequelize.Op;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

exports.getUser = async req => await models.User.findOne({
    where: {
        id: req.session.userId
    }
});

exports.getDate = () => monthNames[new Date().getMonth()] + ' ' + new Date().getDate(); 

