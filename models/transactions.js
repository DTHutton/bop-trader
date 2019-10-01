// “sequelize” in this case is actually our connection to our database.

// Inside of our function we run the “sequelize.define” method. We pass it two arguments. The name of our model as a string, and an object describing our model’s schema. Each property will represent a column in the database.
// sequelize.define returns an object, which we store inside the variable “User”. We return this User variable at the end.

// Sequelize will pluralize our table names by default, so always name your models in the singular.
const User = require('../models/user');

module.exports = function(sequelize, DataTypes) {
  var Transactions = sequelize.define("Transactions", {
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
    transactionType: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    priceAtSale: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    saleAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    idKey: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId"
      }
    }
  });

  Transactions.associate = function(models) {
    // We're saying that a Transactions should belong to an User
    // A Transactions can't be created without an User due to the foreign key constraint
    Transactions.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Transactions;
};
