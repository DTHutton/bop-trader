module.exports = function(sequelize, DataTypes) {
  var BuyTransactions = sequelize.define("BuyTransactions", {
    amount: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    },
    cryptoType: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    priceAtBuy: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return BuyTransactions;
};
