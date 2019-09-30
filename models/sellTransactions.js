module.exports = function(sequelize, DataTypes) {
  var SellTransactions = sequelize.define("SellTransactions", {
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
    priceAtSell: {
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

  return SellTransactions;
};
