// “sequelize” in this case is actually our connection to our database.

// Inside of our function we run the “sequelize.define” method.
// * We pass it two arguments.
//   - The name of our model as a string, and an object describing our model’s schema.
// Each property will represent a column in the database.
// sequelize.define returns an object, which we store inside the variable “User”. We return this User variable at the end.

// Sequelize will pluralize our table names by default, so always name your models in the singular.

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    cash: {
      type: DataTypes.INTEGER,
      defaultValue: "100000"
    },
    bitcoin: {
      type: DataTypes.INTEGER,
      defaultValue: "1"
    },
    ethereum: {
      type: DataTypes.INTEGER,
      defaultValue: "0"
    },
    litecoin: {
      type: DataTypes.INTEGER,
      defaultValue: "0"
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

  return User;
};
