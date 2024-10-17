// models/Course.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Course = sequelize.define(
  "Course",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    courseDetails: {
      type: DataTypes.JSON, // You can also use DataTypes.TEXT if MySQL version is lower than 5.7
      allowNull: true,
    },
  },
  {
    tableName: "Courses",
    timestamps: false,
  }
);

module.exports = Course;
