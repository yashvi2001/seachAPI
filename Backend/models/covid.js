"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class covid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  covid.init(
    {
      date: DataTypes.STRING,
      state: DataTypes.STRING,
      fips: DataTypes.INTEGER,
      cases: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "covid",

      timestamps: false,

      createdAt: false,

      updatedAt: false,
    }
  );
  return covid;
};
