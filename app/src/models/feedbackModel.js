const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Feedback = sequelize.define(
  "Feedback",
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    /**
     * Support for very large text content
     * */

    thoughts: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  },
  {
    tableName: "Feedbacks",
    timestamps: false,
  }
);

module.exports = Feedback;
