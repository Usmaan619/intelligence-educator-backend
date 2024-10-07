const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define(
  "Customer",
  {
    customerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    dateOfJoining: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateOfInvestment: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    investedAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    totalPortfolio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    tableName: "Customers",
    timestamps: false,
  }
);

module.exports = Customer;
