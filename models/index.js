const Sequelize = require('sequelize');

const sequelize = new Sequelize('testDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.android = require("../models/versionAndroid") (sequelize, Sequelize)
db.ios = require("../models/versionIos") (sequelize, Sequelize)

module.exports = db