// “sequelize” in this case is actually our connection to our database.

// Inside of our function we run the “sequelize.define” method. We pass it two arguments. The name of our model as a string, and an object describing our model’s schema. Each property will represent a column in the database.
// sequelize.define returns an object, which we store inside the variable “User”. We return this User variable at the end.

// Sequelize will pluralize our table names by default, so always name your models in the singular.

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userFirstName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    userLastName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    userPassword: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      required: true,
      allowNull: false,
      defaultValue: new Date()
    }
  });

  return User;
};
