"use strict";

const Covid = require("./covid");

const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.Covid = Covid;

db.Covid = Covid(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Covid.associate(db);
//check the db is already or not
async function checkDB() {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
checkDB();
const redis = require('redis')
const client  = redis.createClient({
  url: 'redis://default:dQRzI5T8vhgXP3aONCBve8S2GpqPyz0P@redis-19478.c52.us-east-1-4.ec2.cloud.redislabs.com:19478'
});

async function attemptRedisConnection() {
  client.on('error', err=> {
      console.log(err);
  });
  
  await client.connect();
 await  client.flushAll()
  await client.set('up_at', "ok");
  console.log(await client.get('up_at'))
}

attemptRedisConnection()
db.redis = client
module.exports = db;