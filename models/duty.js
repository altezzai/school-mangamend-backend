"use strict";
const { DataTypes } = require("sequelize");
const { schoolSequelize } = require("../config/connection");

const Duty = schoolSequelize.define(
  "Duty",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    school_id: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    deadline: { type: DataTypes.DATEONLY },
    file: { type: DataTypes.STRING },
    trash: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "duties",
    timestamps: false,
  }
);

module.exports = Duty;
